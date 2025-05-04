import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { updateBook } from './BookData';
import { fetchbooks } from '../bookList/BookData';

const UpdateBookForm = ({ open, onClose, book }) => {
  const categories = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Fantasy', 'Programming'];

  const [editBook, setEditBook] = useState({
    bookId: '',
    title: '',
    author: '',
    category: '',
    price: '',
    description: '',
    coverImageBase64: ''
  });

  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (book) {
      setEditBook({
        bookId: book.bookId || '',
        title: book.title || '',
        author: book.author || '',
        category: book.category || '',
        price: book.price || '',
        description: book.description || '',
        coverImageBase64: book.coverImageBase64 || ''
      });
      setImagePreview(book.coverImageBase64 || null);
    }
    fetchBookData();
  }, [book]);

  const fetchBookData = async () => {
    try {
      const data = await fetchbooks();
      console.log('Fetched books:', data);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!editBook.title.trim()) newErrors.title = 'Title is required';
    if (!editBook.author.trim()) newError
    // s.author = 'Author is required';
    if (!editBook.category) newErrors.category = 'Category is required';
    if (!editBook.price || editBook.price <= 0) newErrors.price = 'Valid price is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBook((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        setEditBook((prev) => ({
          ...prev,
          coverImageBase64: base64String,
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('');
      setImagePreview(editBook.coverImageBase64 || null);
      if (file) {
        alert('Please select a valid image file');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await updateBook(editBook);
      
      // Clear form
      setEditBook({
        bookId: '',
        title: '',
        author: '',
        category: '',
        price: '',
        description: '',
        coverImageBase64: ''
      });
      setFileName('');
      setImagePreview(null);
      setErrors({});
      
      onClose();
      await fetchBookData();
    } catch (error) {
      console.error('Failed to update book:', error);
      alert('Error updating book. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setEditBook({
      bookId: '',
      title: '',
      author: '',
      category: '',
      price: '',
      description: '',
      coverImageBase64: ''
    });
    setFileName('');
    setImagePreview(null);
    setErrors({});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      maxWidth="sm"
      fullWidth
      disableAutoFocus={false}
      disableEnforceFocus={false}
      disableRestoreFocus
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>Update Book</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Book Title"
            name="title"
            value={editBook.title}
            onChange={handleChange}
            required
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Author"
            name="author"
            value={editBook.author}
            onChange={handleChange}
            required
            error={!!errors.author}
            helperText={errors.author}
          />
          <TextField
            fullWidth
            margin="normal"
            select
            label="Category"
            name="category"
            value={editBook.category}
            onChange={handleChange}
            required
            error={!!errors.category}
            helperText={errors.category}
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
            value={editBook.price}
            onChange={handleChange}
            required
            error={!!errors.price}
            helperText={errors.price}
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
            value={editBook.description}
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {imagePreview && (
              <Card sx={{ mt: 2, maxWidth: '300px', mb: 2 }}>
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
              <Button variant="contained" component="span" disabled={isSubmitting}>
                Update Photo
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
          <Button onClick={handleCancel} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Book'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdateBookForm;