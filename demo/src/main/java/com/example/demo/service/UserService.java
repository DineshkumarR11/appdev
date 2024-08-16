package com.example.demo.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

import jakarta.transaction.Transactional;



@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

   
    public List<User> getUsers()
    {
        return userRepo.findAll();
    }
    public Optional<User> getUserById(long id)
    {
        return userRepo.findById(id);
    }
    public User postUsers(User user)
    {
        return userRepo.save(user);
    }
    public User editUser(User user,long id)
    {
        User u=userRepo.findById(id).orElse(null);
        if(u!=null)
        {
            u.setEmail(user.getEmail());
            u.setUserName(user.getUserName());
            u.setPassword(user.getPassword());
            userRepo.saveAndFlush(u);
        }
        return user;

    }
   
   
    
     
    
}