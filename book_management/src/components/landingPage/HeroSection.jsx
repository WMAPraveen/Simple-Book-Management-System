import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const HeroSection = () => {
  return (
    <Box sx={{ display: 'flex', padding: '40px 0', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ flex: 1, backgroundColor: '#40c4ff', padding: '20px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
          "Effortless Book Management at Your Fingertips"
        </Typography>
      </Box>
      <Box sx={{ flex: 2 }}>
        
        <Typography variant="h4" sx={{ fontWeight: 'bold', margin: '10px 0' }}>
          A modern solution for libraries, schools, and book lovers.
        </Typography>
        <Typography variant="body1" sx={{ color: '#424242', marginBottom: '20px' }}>
          Our Book Management System is a user-friendly web application designed to efficiently
          organize, track, and manage books in libraries or personal collections.
          With features like search, categorization, and lending records, it simplifies book
          handling for administrators, librarians, and readers, ensuring a seamless and organized reading
          experience for everyone.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#ff4081', '&:hover': { backgroundColor: '#f50057' } }}>
          Read More
        </Button>
      </Box>
    </Box>
  )
}

export default HeroSection