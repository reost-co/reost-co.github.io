/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.backend.rest;

import java.util.*;

import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.*;
//import javax.ws.rs.core.*;
import org.springframework.stereotype.Component;

/**
 *
 * @author Silas
 */

@Component
@ApplicationPath("rest")
public class Restbase extends ResourceConfig {
    
    public Restbase() {
        
        register(com.reost.backend.rest.Hello.class);
        
    }
    
    /*@Override
    public Set<Class<?>> getClasses() {
        
        Set<Class<?>> classes = new HashSet<>();
        
        addClasses(classes);
        
        return classes;
        
    }*/
    
    protected boolean addClasses(Set<Class<?>> set) {
        
        set.add(com.reost.backend.rest.Hello.class);
        
        return true;
    }
    
}
