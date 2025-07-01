package com.example.bookManagement.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Book {
    @Id
    @Column(name="Book_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookId;
    @Column(name="Book_Title")
    private String title;
    @Column(name="Author")
    private String author;
    @Column(name="Category")
    private String category;
    @Lob
    @Column(name = "Image", columnDefinition="LONGBLOB")
    private byte[] coverImage;
    @Column(name="Price")
    private double price;
    @Column(name="Description")
    private String description;
}
