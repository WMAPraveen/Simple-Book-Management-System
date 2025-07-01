package com.example.bookManagement.controller;

import com.example.bookManagement.model.BookDTO;
import com.example.bookManagement.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class BookController {

    @Autowired
    BookServiceImpl bookService;

    @PostMapping(value = "/addbook")
    public BookDTO addbook (@RequestBody BookDTO bookDTO)
    {
        return bookService.addbook(bookDTO);

    }

    @GetMapping(value = "/book/{id}")
    public BookDTO getbook(@PathVariable Integer id)
    {
        return bookService.getBookById(id);
    }

    @GetMapping(value = "/booklist")
    public ArrayList<BookDTO> getBookList()
    {
        ArrayList<BookDTO> bookDTOS =  bookService.bookList();
        return bookDTOS;
    }

    @PutMapping(value = "/updatebook")
    public BookDTO updatebook (@RequestBody BookDTO bookDTO)
    {
        return bookService.updateBook(bookDTO);
    }

    @DeleteMapping(value = "/deletebook/{id}")
    public String deletebook(@PathVariable Integer id)
    {
        return bookService.deleteBook(id);
    }
}
