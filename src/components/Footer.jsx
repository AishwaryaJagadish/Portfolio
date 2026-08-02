import React from 'react';
import { Box, Container, Typography, IconButton, Link, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/aishwarya-jagadish-28794b209/",
      label: "LinkedIn"
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/AishwaryaJagadish",
      label: "GitHub"
    },
    {
      icon: <EmailIcon />,
      url: "mailto:ajagadis@usc.edu",
      label: "Email"
    },
    {
      icon: <RssFeedIcon />,
      url: "https://hashnode.com/@Aishwarya21",
      label: "Blog"
    }
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #112240, #0a192f)',
      pt: { xs: 4, md: 8 },
      px: { xs: 2, md: 0 },
      position: 'relative',
      zIndex: 2,
      borderTop: '1px solid rgba(255, 182, 193, 0.15)'
    }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" textAlign="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ 
              color: '#ffb6c1',
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              mb: 3
            }}>
              Let's Connect!
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#8892b0', 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.2rem' },
              px: { xs: 1, md: 0 },
            }}>
              Feel free to reach out for collaborations or just a friendly hello!
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center',
              mb: 4
            }}>
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component={Link}
                    href={social.url}
                    target="_blank"
                    title={social.label}
                    sx={{ 
                      color: '#ffb6c1',
                      border: '1px solid #ffb6c1',
                      padding: '12px',
                      '&:hover': { 
                        backgroundColor: 'rgba(255, 182, 193, 0.1)',
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ 
          mt: 4, 
          py: 3, 
          borderTop: '1px solid rgba(255, 182, 193, 0.15)',
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ color: '#8892b0' }}>
            © {new Date().getFullYear()} Aishwarya Jagadish. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 