package com.example.bookManagement.controller;

import com.example.bookManagement.model.UserDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {



    @PostMapping(value = "/signup")
    public UserDTO signup(@RequestBody UserDTO userDTO){

    }
}
