/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.api;

import java.sql.*;
import java.util.*;

/**
 *
 * @author Silas
 */
public class Projects {
    
    final Factory factory = new Factory();
    
    final Messaging messaging = new Messaging();
    
    /**
     * Initialization
     */
    public Projects() {
        
    }
    
    /**
     * Posting a new project
     * @param owner
     * @param title
     * @param description
     * @param budget
     * @param duration
     * @return 
     */
    public boolean createNewProject(String owner, String title, String description, String budget, String duration) {
        
        //Enter data into database
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "insert into projects(owner,title,description,proposed_budget,proposed_duration,"
                        + "post_date,state,progress,start,end) values(?,?,?,?,?,?,?,?,?,?)";
                
                PreparedStatement ps = factory.getPreparedStatement(con,query);
                ps.setString(1,owner);
                ps.setString(2,title);
                ps.setString(3,description);
                ps.setString(4,budget);
                ps.setString(5,duration);
                ps.setString(6,new java.util.Date().toString());
                ps.setString(7,"pending");
                ps.setString(8,"0");
                ps.setString(9,"---");
                ps.setString(10,"---");
                
                ps.executeUpdate();
                
                //Now select the last project to add the milistones correctly
                
                Statement st = factory.getStatement(con);
                
                ResultSet rs = st.executeQuery("select *from projects where owner='"+owner+"'");
                
                rs.last();
                
                String project = rs.getString("id");
                
                //Now add milistones to this
                createMilistone(project, "Analysis & Design","pending","0", con);
                createMilistone(project, "Development","pending","0", con);
                createMilistone(project, "Testing","pending","0", con);
                createMilistone(project, "Delivery","pending","0", con);
                
                //Send Email
                
                var pr = new Accounts().getUserInfo(owner);
                String msg = "Hello "+pr.get("fname")
                        +"""
                        , Hope you are doing great!<p/>
                         
                         This is to inform you that we have received your project details, and want 
                         to appreciate you for choosing Reost, Inc. <p/>
                         An expert from our team will be reaching out to you shortly (approximately in 24HRs) to 
                         discuss with you and then we'll start immediately. <p/>
                         Thank you for building with us!<p/>
                         
                         Best regards,<br/>
                         Reost Team
                                                                                     
                        """;
                
                messaging.sendContentEmail(pr.get("email"), "Project successfully posted!", msg);
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return true;
    }
    
    /**
     * Fetching all projects from the database
     * @return 
     */
    public List<Map<String,String>> getAllProjects() {
        
        List<Map<String,String>> r = new ArrayList<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "select *from projects";
                
                ResultSet rs = factory.getStatement(con).executeQuery(query);
                
                while(rs.next()) {
                 
                    Map<String,String> it = new HashMap<>();
                    it.put("id", rs.getString("id"));
                    it.put("owner", rs.getString("owner"));
                    it.put("title", rs.getString("title"));
                    it.put("description", rs.getString("description"));
                    it.put("budget", rs.getString("proposed_budget"));
                    it.put("duration", rs.getString("proposed_duration"));
                    it.put("post_date", rs.getString("post_date"));
                    it.put("state", rs.getString("state"));
                    it.put("progress", rs.getString("progress"));
                    it.put("start", rs.getString("start"));
                    it.put("end", rs.getString("end"));
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }

        Collections.reverse(r);
        
        return r;
        
    }
    
    /**
     * Fetching all projects from the database by state
     * @param state
     * @return 
     */
    public List<Map<String,String>> getAllProjectsByState(String state) {
        
        List<Map<String,String>> r = new ArrayList<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "select *from projects where state = '"+state+"'";
                
                ResultSet rs = factory.getStatement(con).executeQuery(query);
                
                while(rs.next()) {
                 
                    Map<String,String> it = new HashMap<>();
                    it.put("id", rs.getString("id"));
                    it.put("owner", rs.getString("owner"));
                    it.put("title", rs.getString("title"));
                    it.put("description", rs.getString("description"));
                    it.put("budget", rs.getString("proposed_budget"));
                    it.put("duration", rs.getString("proposed_duration"));
                    it.put("post_date", rs.getString("post_date"));
                    it.put("state", rs.getString("state"));
                    it.put("progress", rs.getString("progress"));
                    it.put("start", rs.getString("start"));
                    it.put("end", rs.getString("end"));
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }

        Collections.reverse(r);
        
        return r;
        
    }
    
    /**
     * Fetching all projects from the database by state
     * @param owner
     * @return 
     */
    public List<Map<String,String>> getAllProjectsByOwner(String owner) {
        
        List<Map<String,String>> r = new ArrayList<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "select *from projects where owner = '"+owner+"'";
                
                ResultSet rs = factory.getStatement(con).executeQuery(query);
                
                while(rs.next()) {
                 
                    Map<String,String> it = new HashMap<>();
                    it.put("id", rs.getString("id"));
                    it.put("owner", rs.getString("owner"));
                    it.put("title", rs.getString("title"));
                    it.put("description", rs.getString("description"));
                    it.put("budget", rs.getString("proposed_budget"));
                    it.put("duration", rs.getString("proposed_duration"));
                    it.put("post_date", rs.getString("post_date"));
                    it.put("state", rs.getString("state"));
                    it.put("progress", rs.getString("progress"));
                    it.put("start", rs.getString("start"));
                    it.put("end", rs.getString("end"));

                    r.add(it);
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }

        Collections.reverse(r);
        
        return r;
        
    }
    
    /**
     * Fetching project from the database by id
     * @param id
     * @return 
     */
    public Map<String,String> getProject(String id) {
        
        Map<String,String> it = new HashMap<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "select *from projects id = '"+id+"'";
                
                ResultSet rs = factory.getStatement(con).executeQuery(query);
                
                if(rs.next()) {
                    
                    it.put("id", rs.getString("id"));
                    it.put("owner", rs.getString("owner"));
                    it.put("title", rs.getString("title"));
                    it.put("description", rs.getString("description"));
                    it.put("budget", rs.getString("proposed_budget"));
                    it.put("duration", rs.getString("proposed_duration"));
                    it.put("post_date", rs.getString("post_date"));
                    it.put("state", rs.getString("state"));
                    it.put("progress", rs.getString("progress"));
                    it.put("start", rs.getString("start"));
                    it.put("end", rs.getString("end"));
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return it;
        
    }
    
    /*
    Now deal with the milestones
    */
    
    /**
     * Creating a distinct project milestone
     * @param project
     * @param milestone
     * @param progress
     * @param state
     * @param con
     * @return 
     */
    public boolean createMilistone(String project, String milestone, String state, String progress, Connection con) {
        
        try {
             
            String query = "insert into project_milistones(project,milistone,state,progress,complete_date) "
                    + "values(?,?,?,?,?)";

            PreparedStatement ps = factory.getPreparedStatement(con, query);
            ps.setString(1,project);
            ps.setString(2,milestone);
            ps.setString(3,state);
            ps.setString(4,progress);
            ps.setString(5,"---");

            ps.executeUpdate();
            
            
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
        
        return true;
    }
    
    /**
     * get project milestones
     * @param project
     * @return 
     */
    public List<Map<String,String>> getMilestones(String project) {
        
        List<Map<String,String>> milistones = new ArrayList<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "select *from project_milistones where project = '"+project+"'";
                
                ResultSet rs = factory.getStatement(con).executeQuery(query);
                
                while(rs.next()) {
                    
                    Map<String,String> mili = new HashMap<>();
                    mili.put("id", rs.getString("id"));
                    mili.put("project", rs.getString("project"));
                    mili.put("milistone", rs.getString("milistone"));
                    mili.put("state", rs.getString("state"));
                    mili.put("progress", rs.getString("progress"));
                    mili.put("complete_date", rs.getString("complete_date"));

                    milistones.add(mili);
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return milistones;
        
    }
    
}
