/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.api;

import java.util.*;
import java.sql.*;

import javax.servlet.http.*;

/**
 *
 * @author Silas
 */
public class Accounts {
    
    private final Factory factory = new Factory();
    
    final Messaging messaging = new Messaging();
    
    /**
     * Initialise
     */
    public Accounts() {
        
    }
    
    /**
     * Creating new Account
     * @param fname
     * @param lname
     * @param email
     * @param phone
     * @param password
     * @return 
     */
    public boolean createAccount(String fname, String lname, String email, String phone,
    String gender, String address, String password
        
    ) {
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "insert into accounts(fname,lname,email,phone,gender,address,"
                        + "state,password,create_date) values(?,?,?,?,?,?,?,?,?)";
                
                PreparedStatement ps = factory.getPreparedStatement(con, query);
                
                ps.setString(1,fname);
                ps.setString(2, lname);
                ps.setString(3,email);
                ps.setString(4,phone);
                ps.setString(5,gender);
                ps.setString(6,address);
                ps.setString(7, "true");
                ps.setString(8,password);
                ps.setString(9,new java.util.Date().toString());
                
                ps.executeUpdate();
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
            return false;
        }
        
        return true;
    }
    
    /**
     * Signing in method
     * @param email
     * @param password
     * @param res
     * @param message
     * @return 
     */
    public String signIn(String email, String password) {

        String message = null;
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                String query = "select *from accounts where email=?";
                
                PreparedStatement ps = factory.getPreparedStatement(con, query);
                ps.setString(1,email);
                
                ResultSet rs = ps.executeQuery();
                
                if(rs.next()) {
                    
                    if(rs.getString("password").equals(password)) {
                        
                        message = "Success!-"+rs.getString("id");
                        
                        Cookie ck = new Cookie("reost_user", rs.getString("id"));
                        ck.setComment("user signin cookie");
                        ck.setMaxAge((60*60)*720);
                        
                        //res.addCookie(ck);
                        
                    } 
                    
                    else {
                        
                        message = "Sorry, the password you've submitted is incorrect!";
                        
                    }
                    
                } else {
                    
                    message = "Account with email ["+email+"] does not exist!";
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return message;
        
    }
    
    /**
     * Signing out all accounts. full data clean up
     * @param req
     * @param res
     * @return 
     */
    public boolean signOut(HttpServletRequest req, HttpServletResponse res) {
        
        Cookie[] cookies = req.getCookies();
        
        for(Cookie ck : cookies) {
            
            ck.setMaxAge(0);
            
            res.addCookie(ck);
            
        }
        
        return true;
    }
    
    /**
     * Email verification
     * @param email
     * @param feed
     * @return 
     */
    public String validateEmail(String email) {
        
        java.security.SecureRandom random = new java.security.SecureRandom();
        
        int min = 1000000; int max = 10000000;
        
        int rand = random.nextInt(min, max);
        
        String code = String.valueOf(rand);
        
        String message = """
                         Hello, Hope you are doing well!
                         <p/>
                         Thank you for submitting your request to create a reost account.
                         Below is your verification code<p/>
                         Verification code : 
                         """+code+
                """
                <p/>
                Enter code to proceed with account creation.
                <p/>
                Thank you and best regards,<br/>
                Reost Team
                """;

        messaging.sendContentEmail(email, "Email verification", message);
        
        return code;
        
    }
    
    /**
     * Account recovery
     * @param email
     * @param feed
     * @return 
     */
    public String recoverAccount(String email) {
        
        //get password from database
        
        String password = null, feed = null;
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                Statement stm = factory.getStatement(con);
                
                ResultSet set = stm.executeQuery("select *from accounts where email='"+email+"'");
                
                if(set.next()) {
                    
                    password = set.getString("password");

                    feed = "Success! A recovery email has been sent to you.";
                    
                }
                
                else {
                    
                    feed = "Account does not exist!";
                    
                    return feed;
                    
                }
                
            }
            
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        //Email the password
        String message = """
                         You have requested for account recovery, please find your reost account password bellow. <p/>
                         Password : 
                         """+password+"""
                                      <p/>
                                      For the best security of your account, please login using this password and 
                                      use it to change your password immediately.<p/>
                                      Thank you and best regards<br/>
                                      Reost Team
                                      """;
        
        messaging.sendContentEmail(email, "Account recovery", message);
        
        return feed;
        
    }
    
    /**
     * Check account existence
     * @param email
     * @return 
     */
    public boolean accountExists(String email) {
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                return factory.getStatement(con).executeQuery("select *from accounts where email='"+email+"'").next();
                
            }
            
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return false;
    }
    
    /**
     * Change account password
     * @param id
     * @param newp
     * @return 
     */
    public String changePassword(String id, String curp, String newp) {
        
        try {
            
            Map<String,String> dt = getUserInfo(id);

            if(curp.equals(dt.get("password"))) {
                    
                try(Connection con = factory.getDBConnection()) {
                    
                    String query = "update accounts set password=? where id=?";
                    
                    PreparedStatement ps = factory.getPreparedStatement(con, query);
                    ps.setString(1,newp);
                    ps.setString(2,id);
                    
                    ps.executeUpdate();

                    return "Success!";
                    
                }
            }

            else {

                return "Invalid current password!";
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return "Failed!";
    }
    
    /**
     * Fetching user information
     * @param id
     * @return 
     */
    public Map<String,String> getUserInfo(String id) {
        
        Map<String,String> r = new HashMap<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                ResultSet res = factory.getStatement(con).executeQuery("select *from accounts where id='"+id+"'");
                
                if(res.next()) {
                    
                    r.put("id", res.getString("id"));
                    r.put("fname", res.getString("fname"));
                    r.put("lname", res.getString("lname"));
                    r.put("email", res.getString("email"));
                    r.put("phone", res.getString("phone"));
                    r.put("gender", res.getString("gender"));
                    r.put("address", res.getString("address"));
                    r.put("state", res.getString("state"));
                    r.put("password", res.getString("password"));
                    r.put("create_date", res.getString("create_date"));
                    
                } 

                else {
                    System.out.println("No record found!");
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return r;
        
    }
    
    /**
     * Check if user is logged in
     * @param user
     * @return 
     */
    public boolean isLoggedIn(String user) {
        
        if(user == null) {
            return false;
        }
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                ResultSet r = factory.getStatement(con).executeQuery("select *from accounts where id='"+user+"'");
                
                if(r.next()) {
                    
                    return true;
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return false;
    }
    
}
