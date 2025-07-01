package com.example.bookManagement.service;

import com.example.bookManagement.entity.Book;
import com.example.bookManagement.model.BookDTO;
import com.example.bookManagement.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    ArrayList<BookDTO> list = new ArrayList<>();
    @Autowired
    BookRepository bookRepository ;

    public BookDTO addbook (BookDTO bookDTO){
        Book book = convertBookDTOToBook(bookDTO);
        if (bookDTO.getCoverImageBase64() != null) {
            byte[] imageBytes = Base64.getDecoder().decode(bookDTO.getCoverImageBase64().split(",")[1]);
            book.setCoverImage(imageBytes);
        }
        try {
            bookRepository.save(book);
        }catch(Exception e){
            System.out.println(e);
        }
        return bookDTO;
    }

    public BookDTO getBookById (int id)
    {
        Optional<Book> bOptional = bookRepository.findById(id);

        if(bOptional.isPresent()){
            Book b = bOptional.get();
            BookDTO bookDTO = convertBookToBookDTO(b);
            return bookDTO;
        }

        return null;

    }

    public ArrayList<BookDTO> bookList() {
        ArrayList<Book> BookList = bookRepository.findAll();
        ArrayList<BookDTO> BookDTOList = new ArrayList<>();
        for(Book b : BookList)
        {
            BookDTO bookDTO = convertBookToBookDTO(b);
//               bookDTO.setCoverImage(b.getCoverImage());
            BookDTOList.add(bookDTO);

        } return BookDTOList;

    }

    public BookDTO updateBook (BookDTO bookDTO)
    {

     Optional<Book> bookOptional = bookRepository.findById(bookDTO.getBookId()) ;
     if(bookOptional.isPresent()) {
         Book book = bookOptional.get();

         book.setDescription(bookDTO.getDescription());
         book.setTitle(bookDTO.getTitle());
         book.setCategory(bookDTO.getCategory());
         book.setAuthor(bookDTO.getAuthor());
         book.setPrice(bookDTO.getPrice());
         bookRepository.save(book);
     }
     return bookDTO;

    }

    public String deleteBook(int id)
    {
        for(BookDTO bookDTO : list)
        {
            if(bookDTO.getBookId().equals(id)){
                list.remove(bookDTO);
                return bookDTO.getTitle() + " Deleted";
            }
        } return "Book Not Found";
    }

   public BookDTO convertBookToBookDTO (Book b){
        BookDTO bookDTO = new BookDTO();

       bookDTO.setTitle(b.getTitle());
       bookDTO.setBookId(b.getBookId());
       bookDTO.setAuthor(b.getAuthor());
       bookDTO.setCategory(b.getCategory());
       bookDTO.setPrice(b.getPrice());
       bookDTO.setDescription(b.getDescription());

       byte[] imageBytes = b.getCoverImage();
       if(imageBytes!=null && imageBytes.length!=0){
           String base64String = "data:image/png;base64," + Base64.getEncoder().encodeToString(imageBytes);
           bookDTO.setCoverImageBase64(base64String);
       }


       return bookDTO;
   }
    public Book convertBookDTOToBook (BookDTO bookDTO){
         Book book = new Book();

        book.setTitle(bookDTO.getTitle());
        book.setAuthor(bookDTO.getAuthor());
        book.setCategory(bookDTO.getCategory());
        book.setPrice(bookDTO.getPrice());
        book.setDescription(bookDTO.getDescription());
        return book;
    }

}

