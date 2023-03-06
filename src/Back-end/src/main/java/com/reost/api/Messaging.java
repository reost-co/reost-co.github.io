/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.api;

import java.util.*;
import java.sql.*;

import javax.mail.*;
import javax.mail.internet.*;

/**
 *
 * @author Silas
 */
public class Messaging {
    
    private final Factory factory = new Factory();
    
    public Messaging() {
        
    }
    
    /**
     * method to send message
     * @param name
     * @param phone
     * @param email
     * @param message
     * @param subject
     * @return 
     */
    public boolean sendMessage(String name, String phone, String email, String message, String subject) {
        
        try {
            
            try(Connection mycon = factory.getDBConnection()) {
                
                String query = "insert into messages(fullname,email,phone,subject,"
                        + "message,state,date) values(?,?,?,?,?,?,?)";
                
                PreparedStatement ps = factory.getPreparedStatement(mycon, query);
                ps.setString(1,name);
                ps.setString(2,email);
                ps.setString(3,phone);
                ps.setString(4,subject);
                ps.setString(5,message);
                ps.setString(6,"unread");
                ps.setString(7,new java.util.Date().toString());

                ps.executeUpdate();
                
                //send an email
                
                String msg = "Hello "+name+"""
                             
                                           <p/>
                                           Thank you for contacting us, we appreciate your precious time to 
                                           write to us! <p/>
                                           A member of our team will be reaching out to you concerning this 
                                           subjcet within the next 48 hours. <p/>
                                           Thank you and best regards, <br/>
                                           Reost Team
                                           
                             """;
                
                sendContentEmail(email,"Thank you for contacting us!", msg);
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
            
            return false;
        }
        
        return true;
    }
    
    /**
     * Sending email
     * @param to
     * @param subject
     * @param message
     * @return 
     */
    public boolean sendTextEmail(String to, String subject, String message) {
        
        //Credentials
        String from = "";
        String password = "";
        //host
        String host = "smtp.gmail.com";
        
        //Properties
        Properties properties = System.getProperties();
        
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");
        
        //Session
        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                
                return new PasswordAuthentication(from,password);
            }
            
        });
        
        //Mime message
        try {
            
            MimeMessage mimemessage = new MimeMessage(session);
            
            mimemessage.setFrom(new InternetAddress(from));
            
            mimemessage.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            
            mimemessage.setSubject(subject);
            
            mimemessage.setText(message);
            
            Transport.send(mimemessage);
            
        }
        
        catch (MessagingException mex) {
            System.out.println(mex.getMessage());
            
            return false;
        }
        
        return true;
    }
    
    /**
     * Sending email
     * @param to
     * @param subject
     * @param message
     * @return 
     */
    public boolean sendContentEmail(String to, String subject, String message) {
        
        String msg = head+message+foot;
        
        //Credentials
        String from = "";
        String password = "";
        //host
        String host = "smtp.gmail.com";
        
        //Properties
        Properties properties = System.getProperties();
        
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");
        
        //Session
        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                
                return new PasswordAuthentication(from,password);
            }
            
        });
        
        //Mime message
        try {
            
            MimeMessage mimemessage = new MimeMessage(session);
            
            mimemessage.setFrom(new InternetAddress(from));
            
            mimemessage.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            
            mimemessage.setSubject(subject);
            
            mimemessage.setContent(msg, "text/html");
            
            Transport.send(mimemessage);
            
        }
        
        catch (MessagingException mex) {
            System.out.println(mex.getMessage());
            
            return false;
        }
        
        return true;
    }
    
    /**
     * Sending promotion email
     * @param to
     * @param subject
     * @param message
     * @return 
     */
    public boolean sendPromotionEmail(List<String> to, String subject, String message) {
        
        String msg = head+message+foot;
        
        //Credentials
        String from = "";
        String password = "";
        //host
        String host = "smtp.gmail.com";
        
        //Properties
        Properties properties = System.getProperties();
        
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");
        
        //Session
        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                
                return new PasswordAuthentication(from,password);
            }
            
        });
        
        //Mime message
        try {
            
            MimeMessage mimemessage = new MimeMessage(session);
            
            mimemessage.setFrom(new InternetAddress(from));
            
            for(String t:to) {
                mimemessage.addRecipient(Message.RecipientType.TO,new InternetAddress(t));
            }
            
            mimemessage.setSubject(subject);
            
            mimemessage.setContent(msg, "text/html");
            
            Transport.send(mimemessage);
            
        }
        
        catch (MessagingException mex) {
            System.out.println(mex.getMessage());
            
            return false;
        }
        
        return true;
    }
    
    
    //Message formating
    private final String head = """
                  <html>
                  <head>
                  <title>Email</title>
                  <meta charset="utf-8"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <style>
                  @font-face {
                  font-family : maven;
                  src : url(https://reost-co.github.io/fonts/maven.ttf);
                  }

                  .body {
                  background : hsl(235,12%,25%);
                  font-family : maven;
                  font-size : 24px;
                  color : azure;
                  }

                  .footer {
                  background : hsl(235,15%,15%);
                  font-family : maven;
                  font-size : 24px;
                  color : azure;
                  }

                  .blue {
                  background : hsl(235,95%,61%);
                  }

                  .black {
                  background : hsl(235,25%,15%);
                  /*border-radius : 7px 7px 0px 0px;*/
                  }
                  </style>

                  </head>

                  <body class="body">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr><td height="21" class="black"></td></tr>
                  <tr><td height="21" class="blue"></td></tr>
                  <tr><td valign="top" height="300" class="body"><p>""";

    private final String foot = """
                  </p></td></tr>
                  <tr><td height="50" class="footer" align="center" valign="center">
                  Access Of No Distance<p/>
                  <img src="https://reost-co.github.io/images/logo.png" width="121" height="121" alt="Logo" /> <p/>
                  \u00a9 Reost, Inc 2023. All rights reserved.
                  </td></tr></table>

                  </body> </html>""";
    
}

