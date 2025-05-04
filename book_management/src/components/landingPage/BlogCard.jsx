import { Button, Card, CardContent, CardMedia, Chip, Grid, Link, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { fetchbooks } from '../bookList/BookData';

const BlogCard = () => {


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



  return (
    <Grid container spacing={3}>
      {booklist?.map((book) => (
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
                  textDecoration: "none", "&:hover": {
                    textDecoration: "underline",
                    color: "secondary.main"
                  }
                }}>{book.author}</Link>  (Author)
              </Typography>
              <Chip label={book.category} size="small" sx={{ mb: 1 }} />
              <Typography variant="h6" color="primary">
                ${book.price}
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#ff4081', '&:hover': { backgroundColor: '#f50057' } }}>
                Read More
              </Button>
            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogCard