import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import BlogCard from './BlogCard';

const BlogSection = () => {
    
      return (
        <Box sx={{ padding: '40px 0' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '50px' }}>
            ALL BOOK CATEGORIES
          </Typography>
          <Grid container spacing={3}>
            
              
                <BlogCard/>
             
         
          </Grid>
        </Box>
  )
}

export default BlogSection