package com.example.bookManagement.model;

import lombok.Getter;
import lombok.Setter;

public class BookDTO {
    @Getter @Setter
    private Integer bookId;
    @Getter @Setter
    private String title;
    @Getter @Setter
    private String author;
    @Getter @Setter
    private String category;
    @Getter @Setter
    private String coverImageBase64;
    @Getter @Setter
    private double price;
    @Getter @Setter
    private String description;
}
