package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Doctor;
import com.example.demo.repository.DoctorRepo;

@Service
public class DoctorService {
    @Autowired
    DoctorRepo dockerRepo;
    public Doctor postDoctors(Doctor doctor)
    {
        return dockerRepo.save(doctor);
    }
    
}
