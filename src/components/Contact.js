import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current
      );

      if (result.text === 'OK') {
        setSnackbar({
          open: true,
          message: 'Message sent successfully! I will get back to you soon.',
          severity: 'success'
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again or contact me directly at potnurupavan51@gmail.com',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ py: 10 }}
      >
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          sx={{ 
            mb: 8,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          Contact Me
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              elevation={3}
              sx={{ 
                p: 6,
                height: '100%',
                borderRadius: 2
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontSize: '1.8rem', mb: 3 }}>
                Get In Touch
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                Feel free to reach out to me using the contact form or through any of the social media platforms listed below.
              </Typography>
              
              <Box sx={{ mt: 6 }}>
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.4rem', mb: 3 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    <a href="mailto:potnurupavan51@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                      potnurupavan51@gmail.com
                    </a>
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LinkedInIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    <a href="https://www.linkedin.com/in/potnuru-pavan-kumar-1a32641b6" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      LinkedIn Profile
                    </a>
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GitHubIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    <a href="https://github.com/potnurupavan51" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      GitHub Profile
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              elevation={3}
              sx={{ 
                p: 6,
                borderRadius: 2
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontSize: '1.8rem', mb: 4 }}>
                Send Me a Message
              </Typography>
              <form ref={form} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="user_name"
                  margin="normal"
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: { fontSize: '1.1rem' }
                  }}
                  InputLabelProps={{
                    sx: { fontSize: '1.1rem' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="user_email"
                  type="email"
                  margin="normal"
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: { fontSize: '1.1rem' }
                  }}
                  InputLabelProps={{
                    sx: { fontSize: '1.1rem' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                  sx={{ mb: 4 }}
                  InputProps={{
                    sx: { fontSize: '1.1rem' }
                  }}
                  InputLabelProps={{
                    sx: { fontSize: '1.1rem' }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                  sx={{ 
                    fontSize: '1.1rem',
                    py: 1.5,
                    px: 4,
                    position: 'relative'
                  }}
                >
                  {loading ? (
                    <>
                      <CircularProgress
                        size={24}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%', fontSize: '1.1rem' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 