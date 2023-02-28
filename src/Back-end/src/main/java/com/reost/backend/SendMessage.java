/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.backend;

import org.springframework.web.bind.annotation.*;

import com.reost.api.*;


/**
 *
 * @author Silas
 */

@RestController
@CrossOrigin(origins=Factory.origins)
public class SendMessage {
    
    /**
     * Rest Service to send 
     * @param name
     * @param phone
     * @param email
     * @param message
     * @param subject
     * @return 
     */
    @PostMapping("/sendMessage")
    public String sendMessage(
            @RequestParam("name") String name,
            @RequestParam("phone") String phone,
            @RequestParam("email") String email,
            @RequestParam("message") String message,
            @RequestParam("subject") String subject
    ) {
        
        //Performing action of sending
        var msg = new Messaging();
        
        if(msg.sendMessage(name, phone, email, message, subject)) {
            return "Your message has been successfully delivered! Thank you.";
        }
        
        return "Error! Your message could not be delivered!";
        
    }
    
    @GetMapping("/hi")
    public String hiUser() {
        
        return "Hi User!";
    }
    
}
