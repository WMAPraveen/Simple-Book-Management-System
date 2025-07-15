import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Slide,
  Stack,
  Container,
} from '@mui/material';

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // background: 'linear-gradient(135deg, #6b7280 0%, #1e3a8a 100%)',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: { xs: '95%', sm: 900 },
          height: { xs: 600, sm: 550 },
          borderRadius: 4,
          overflow: 'hidden',
          display: 'flex',
          position: 'relative',
          bgcolor: 'white',
        }}
      >
        {/* Sign In Form */}
        <Slide direction="right" in={!isSignUp} timeout={500}>
          <Box
            sx={{
              width: '40%',
              p: { xs: 3, sm: 5 },
              position: 'absolute',
              left: { xs: '45%', sm: '50%' }, // Shifted right for better visibility
              top: 0,
              bottom: 0,
              opacity: isSignUp ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pointerEvents: isSignUp ? 'none' : 'auto',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Sign In
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              />
              <Button variant="contained" color="primary" size="large">
                Sign In
              </Button>
              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Button
                  onClick={toggleForm}
                  color="secondary"
                  sx={{ textTransform: 'none' }}
                >
                  Sign Up
                </Button>
              </Typography>
            </Stack>
          </Box>
        </Slide>

        {/* Sign Up Form */}
        <Slide direction="left" in={isSignUp} timeout={500}>
          <Box
            sx={{
              width: '40%',
              p: { xs: 3, sm: 5 },
              position: 'absolute',
              left: { xs: '0%', sm: '0%' }, // Shifted right for consistency
              top: 0,
              bottom: 0,
              opacity: isSignUp ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pointerEvents: isSignUp ? 'auto' : 'none',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              />
              <Button variant="contained" color="primary" size="large">
                Sign Up
              </Button>
              <Typography variant="body2" align="center">
                Already have an account?{' '}
                <Button
                  onClick={toggleForm}
                  color="secondary"
                  sx={{ textTransform: 'none' }}
                >
                  Sign In
                </Button>
              </Typography>
            </Stack>
          </Box>
        </Slide>

        {/* Sliding Panel */}
        <Box
          sx={{
            width: '50%',
            height: '100%',
            position: 'absolute',
            right: isSignUp ? 0 : '50%',
            transition: 'right 0.5s ease-in-out',
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: isSignUp ? '4px 0 0 4px' : '0 4px 4px 0',
            zIndex: 10,
          }}
        >
          <Box textAlign="center" p={4}>
            <Typography variant="h3" gutterBottom>
              {isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {isSignUp
                ? 'Sign in to continue your journey.'
                : 'Create an account to get started.'}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={toggleForm}
              sx={{ borderColor: 'white', color: 'white' }}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default AuthForm;