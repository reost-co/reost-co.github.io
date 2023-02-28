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
public class DoAccounts {
    
    final Accounts ac = new Accounts();
    
    public DoAccounts() {
        
    }
    
    /**
     * Create account service
     * @param fname
     * @param lname
     * @param email
     * @param phone
     * @param password
     * @return 
     */
    @PostMapping("/createaccount")
    public String createAccount(
            
            @RequestParam("fname") String fname,
            @RequestParam("lname") String lname,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("gender") String gender,
            @RequestParam("address") String address,
            @RequestParam("password") String password
    
    ) {
        
        String feed;
        
        if(!ac.accountExists(email)) {
            
            if(ac.createAccount(fname, lname, email, phone, gender, address, password)) {
                
                feed = "Success!";
                
            }
            
            else {
                
                feed = "Failed!";
            }
            
        }
        
        else {
            
            feed = "exists!";
            
        }
        
        return feed;
        
    }

    @PostMapping("/signin")
    public String doSignin(@RequestParam("email") String email, @RequestParam("password") String password) {

        return ac.signIn(email,password);
    }
    
    /**
     * Email verification
     * @param email
     * @return 
     */
    @PostMapping("/verifyemail/{email}")
    public String verifyEmail(@PathVariable String email) {
        
        return ac.validateEmail(email);
        
    }
    
    /**
     * Account recovery service
     * @param email
     * @return 
     */
    @PostMapping("/recoveraccount")
    public String recoverAccount(@RequestParam String email) {
        
        return ac.recoverAccount(email);
    }
    
    /**
     * Change password
     * @param newpass
     * @param user
     * @return 
     */
    @PostMapping("/changepassword")
    public String changePassword(@RequestParam("newpass") String newpass, 
            @RequestParam("current") String current,
            @RequestParam("reost_user") String user) {
        
        if(ac.isLoggedIn(user)) {
            
            return ac.changePassword(user, current, newpass);
            
        }
        
        else {
            return "Not allowed!";
        }
        
    }
    
    /**
     * Fetching use =r data
     * @param id
     * @return 
     */
    @GetMapping("/getuserinfo")
    public java.util.Map<String,String> getUserInfo(@RequestParam("id") String id) {

        java.util.Map<String,String> datae = ac.getUserInfo(id);

        datae.put("password", "secret");
        
        return datae;
        
    }

    /**
     * To check if user is logged in
     * @param user
     * @return
     */
    @GetMapping("/isloggedin")
    public String isLoggedIn(@CookieValue("reost_user") String user) {

        if(!ac.isLoggedIn(user) || user == null) {
            return "Failed!";
        }

        return "Success!";
    }

}
