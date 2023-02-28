/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.backend;

import java.util.*;
import java.sql.*;

import org.springframework.web.bind.annotation.*;

import com.reost.api.*;

/**
 *
 * @author Silas
 */

@RestController
@CrossOrigin(origins=Factory.origins)
public class Faq {
    
    final Factory factory = new Factory();
    
    private HashMap<String,String> mp;
    
    @GetMapping("/faq")
    public List<HashMap<String, String>> getFaq() {
        
        List<HashMap<String,String>> li = new ArrayList<>();
        
        try {
            
            try(Connection con = factory.getDBConnection()) {
                
                Statement stm = factory.getStatement(con);
                
                String query = "select *from faq where state='true'";
                
                ResultSet rs = stm.executeQuery(query);
                
                while(rs.next()) {
                    
                    mp = new HashMap<>();
                    
                    mp.put("question", rs.getString("question"));
                    mp.put("answer", rs.getString("answer"));
                    
                    li.add(mp);
                    
                }
                
            }
            
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        return li;
        
    }
    
}
