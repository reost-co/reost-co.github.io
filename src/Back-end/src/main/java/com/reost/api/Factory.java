/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.api;

import java.sql.*;

/**
 *
 * @author Silas
 */
public class Factory {
    
    /**
     * Initialization
     */
    public Factory() {
        
    }
    
    public final static String origins = "http://127.0.0.1:1010";
    
    /**
     * Create Java MySQL database connection
     * @return 
     * @throws java.sql.SQLException
     * @throws java.lang.ClassNotFoundException
     */
    public Connection getDBConnection() throws SQLException, ClassNotFoundException {
        
        //load class
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        String host = "jdbc:mysql://127.0.0.1:3306/reost_inc", user = "silas", password = "jesus";
        
        Connection con;
        
        con = DriverManager.getConnection(host,user,password);
        
        return con;
        
    }
    
    /**
     * Return a configured Prepared Statement
     * @param con
     * @param query
     * Create and configure Prepared Statement
     * @return 
     * @throws java.sql.SQLException
     */
    public PreparedStatement getPreparedStatement(Connection con,String query) throws SQLException {
        
        PreparedStatement ps = con.prepareStatement(query, ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
        
        return ps;
        
    }
    
    /**
     * Return a configured Statement
     * @param con
     * @return
     * @throws SQLException 
     */
    public Statement getStatement(Connection con) throws SQLException {
        
        return con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
    }
    
}
