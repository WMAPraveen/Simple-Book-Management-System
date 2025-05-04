import { useState } from 'react';
import {  Box, Container } from '@mui/material';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import BlogSection from './BlogSection';


function Home() {
  return (
    <Box sx={{ fontFamily: 'Roboto, sans-serif' }}>
      <NavBar />
      <Container>
        <HeroSection />
        <BlogSection />
      </Container>
    </Box>
  );
}

export default Home;