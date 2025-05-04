// BookForm.jsx
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { addBook } from './BookData';
import { fetchbooks } from '../bookList/BookData';

const BookForm = ({ open, onClose }) => {
  const categories = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Fantasy','Programing'];

  const [formData, setFormData] = useState({
    bookId: '',
    title: '',
    author: '',
    category: '',
    price: '',
    description: '',
  });

 useEffect(() => {
        fetchBookData();
    }, []);

    const fetchBookData = async () => {
      try {
        const data = await fetchbooks(); 
        console.log(data);
      
      } catch (err) {
        console.error('Error fetching books', err);
      }
    };
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    if ( !formData.title || !formData.author || !formData.category || !formData.price) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      console.log('Submitting Form:', formData);
      const newBook = await addBook(formData);
      console.log('Added Book:', newBook);

      setFormData({
        
        title: '',
        author: '',
        category: '',
        price: '',
        description: '',
      });
      setImagePreview(null);
      onClose();
      fetchBookData();
    } catch (error) {
      console.error('Failed to add book:', error);
      alert('Error adding book. Please try again.');
    }
  };

  const [fileName, setFileName] = useState('');

  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFileName(file.name);
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = reader.result;
        
        formData.coverImageBase64 = base64String
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('');
      setImagePreview(null);
      // Optionally alert user about invalid file type
      if (file) {
        alert('Please select an image file');
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add New Book</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Book Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
         
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {imagePreview && (
        <Card sx={{ mt: 2, maxWidth: '300px', mb:2}}>
          <CardMedia
            component="img"
            image={imagePreview}
            alt="Preview"
            sx={{ 
              maxHeight: '300px', 
              objectFit: 'contain' 
            }}
          />
        </Card>
      )}
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="file-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Upload Photo
        </Button>
      </label>
      {fileName && (
        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
          Selected file: {fileName}
        </Typography>
      )}
      
    </Box>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setImagePreview(null);onClose()}}>Cancel</Button>
          <Button type="submit" variant="contained">Add Book</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookForm;