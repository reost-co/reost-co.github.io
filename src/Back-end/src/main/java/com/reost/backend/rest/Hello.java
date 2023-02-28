/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.backend.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.springframework.stereotype.Component;

/**
 *
 * @author Silas
 */

@Component
@Path("hello/{name}")
public class Hello {
    
    public Hello() {
        
    }
    
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String sayHello(@PathParam("name") String name) {
        
        return "Hello "+name;
    }
    
    @PUT
    public boolean doPut() {
        
        return true;
    }
    
}
