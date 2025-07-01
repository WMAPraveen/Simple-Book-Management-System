package com.example.bookManagement.repository;

import com.example.bookManagement.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository <Book,Integer> {
    public Book save (Book book);
    public ArrayList<Book> findAll ();
    public Optional<Book> findById (Integer id);
}
