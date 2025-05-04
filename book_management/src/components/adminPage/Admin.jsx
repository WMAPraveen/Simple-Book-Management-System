import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import BookList from '../bookList/BookList'
import AddIcon from '@mui/icons-material/Add';
import BookForm from '../bookForm/BookForm';
import { fetchbooks } from '../bookList/BookData';

const Admin = () => {

    const [openForm, setOpenForm] = useState(false);




    const [booklist, setBooks] = useState([]);

    useEffect(() => {
        console.log()
        fetchBookData();
    }, []);

    const fetchBookData = async () => {
        try {
            const data = await fetchbooks();
            console.log(data);
            setBooks(data);
        } catch (error) {
            console.error('Failed to fetch books:', error);
            setBooks([]);
        }
    };

    const onClose = () => {
        setOpenForm(false);
        fetchBookData();
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box>
                <Typography variant="h3" align="center" gutterBottom>
                    Book Management System
                </Typography>
                <Button variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => setOpenForm(true)}
                    sx={{ mb: 2 }}>
                    Add Book
                </Button>
            </Box>
            <BookForm open={openForm} onClose={onClose} />
            {booklist && <BookList books={booklist} />}

        </Container>
    )
}

export default Admin