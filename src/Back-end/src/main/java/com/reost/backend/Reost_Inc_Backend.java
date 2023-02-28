
package com.reost.backend;

import com.reost.api.Factory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import org.springframework.web.bind.annotation.*;

import org.springframework.boot.web.servlet.*;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@ServletComponentScan
@SpringBootApplication
@RestController
@CrossOrigin(origins = Factory.origins)
public class Reost_Inc_Backend extends SpringBootServletInitializer {
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        
        return application.sources(Reost_Inc_Backend.class);
    }
    
    public static void main(String[] args) {
	SpringApplication.run(Reost_Inc_Backend.class, args);
    }
    
    @GetMapping("/")
    public String helloReost() {
        
        return "Hello User!, This is Reost!";
    }
    
    @GetMapping("/hi/{name}")
    public String sayHi(@PathVariable("name") String name) {
        
        return "Hi "+name;
    }
    
}
