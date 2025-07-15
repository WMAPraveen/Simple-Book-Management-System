package com.example.bookManagement.model;

import lombok.Getter;
import lombok.Setter;

public class UserDTO {

    @Getter @Setter
    private String userName;
    @Getter @Setter
    private String email;
    @Getter @Setter
    private String password;
}
