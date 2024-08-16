package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Doctor;
import com.example.demo.service.DoctorService;

@RestController
public class DoctorController {
    @Autowired
    DoctorService dockerService;
 
    @CrossOrigin
    @PostMapping("/api/postdoctors")
    public Doctor postDoctors(@RequestBody Doctor doctor)
    {
        return dockerService.postDoctors(doctor);
    }
    
}
