package com.example.bookManagement.service;

import com.example.bookManagement.entity.User;
import com.example.bookManagement.model.UserDTO;

public class UserServiceImpl implements UserService {

    public UserDTO signin (UserDTO userDTO){
        User user = new User();

        user.setUserName(userDTO.getUserName());
        user.setEmail(userDTO.getEmail());

//        user.setPassword(userDTO.getPassword());
    }

}
