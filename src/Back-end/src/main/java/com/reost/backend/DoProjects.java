/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reost.backend;

import java.util.*;

import org.springframework.web.bind.annotation.*;

import com.reost.api.*;

/**
 *
 * @author Silascmd
 */

@CrossOrigin(origins = Factory.origins)
@RestController
public class DoProjects {
    
    final Projects pro = new Projects();
    
    public DoProjects() {
        
    }
    
    /**
     * Account creation service
     * @param owner
     * @param title
     * @param description
     * @param budget
     * @param duration
     * @return 
     */
    @PostMapping("/createproject")
    public String createProject(
            @RequestParam("owner") String owner,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("budget") String budget,
            @RequestParam("duration") String duration
    ) {
        
        if(pro.createNewProject(owner, title, description, budget, duration)) {
            
            return "Success!";
        }
        
        return "failed!";
    }
    
    /**
     * Returning all projects
     * @return 
     */
    @GetMapping("/getallprojects")
    public List<Map<String,String>> getProjects() {
        
        return pro.getAllProjects();
        
    }
    
    /**
     * Returning all projects by state
     * @param state
     * @return 
     */
    @GetMapping("/getallprojectsbystate")
    public List<Map<String,String>> getProjectsByState(@RequestParam("state") String state) {
        
        return pro.getAllProjectsByState(state);
        
    }
    
    /**
     * Returning all projects by owner
     * @param owner
     * @return 
     */
    @GetMapping("/getallprojectsbyowner/{owner}")
    public List<Map<String,String>> getProjectsByOwner(@PathVariable("owner") String owner) {
        
        return pro.getAllProjectsByOwner(owner);
        
    }
    
    /**
     * Returns project by id
     * @param id
     * @return 
     */
    @GetMapping("/getproject/{id}")
    public Map<String,String> getProject(@PathVariable("id") String id) {
        
        return pro.getProject(id);
        
    }
    
    /**
     * Return project milestones
     * @param project
     * @return 
     */
    @GetMapping("/getmilestones/{project}")
    public List<Map<String,String>> getMilistones(@PathVariable("project") String project) {
        
        return pro.getMilestones(project);
    }
    
}
