import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// import { fetchbooks } from './BookData';
import UpdateBookForm from '../updateBookForm/UpdateBookForm';

const BookList = ({books}) => {

    const [openUpdateForm, setOpenUpdateForm] = useState(false);
    

    const oncloseUpdateForm = () => {
        setOpenUpdateForm(false);
    }   

    // const handleEditClick = (book) => {
    //     console.log('Edit clicked for book:', book);

    // };

    const onDelete = (id) => {
        console.log('Delete clicked for book ID:', id);

    };
    console.log(books);

    return (
        <>
            <Grid container spacing={3}>
                {books?.map((book) => (
                    <Grid key={book.bookId} item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={book.coverImageBase64 || 'https://via.placeholder.com/200'} // Assuming coverImage is a URL string
                                alt={book.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    by <Link color="primary" sx={{
                                        textDecoration: "none",  "&:hover": {
                                        textDecoration: "underline",
                                        color: "secondary.main"
                                        }
                                    }}>{book.author}</Link>  (Author)
                                </Typography>
                                <Chip label={book.category} size="small" sx={{ mb: 1 }} />
                                <Typography variant="h6" color="primary">
                                    ${book.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => setOpenUpdateForm(true)}>
                                    Edit
                                </Button>
                                <Button size="small" color="error" onClick={() => onDelete(book.id)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <UpdateBookForm open={openUpdateForm} onClose={oncloseUpdateForm}/>
        </>
    );
};

export default BookList;