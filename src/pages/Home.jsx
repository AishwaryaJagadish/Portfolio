import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Publications from './Publications';
import Skills from './Skills';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BiotechIcon from '@mui/icons-material/Biotech';
import StorageIcon from '@mui/icons-material/Storage';
import { useTheme } from '@mui/material/styles';
import ParticleBackground from '../components/ParticleBackground';
import Organizations from './Organizations';
import Awards from './Awards';
import Certifications from './Certifications';
import Volunteering from './Volunteering';

const Home = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      position: 'relative',
      bgcolor: 'background.default',
    }}>
      <ParticleBackground />
      <Header />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          pt: { xs: '72px', md: '100px' },
          pb: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3 },
          position: 'relative',
          zIndex: 2,
          '& > section': {
            mb: { xs: 8, md: 12 },
            '&:last-child': {
              mb: 0
            }
          }
        }}
      >
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="publications">
          <Publications />
        </section>

        <section id="organizations">
          <Organizations />
        </section>

        <section id="awards">
          <Awards />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="volunteering">
          <Volunteering />
        </section>
      </Container>
      
      <Footer />
    </Box>
  );
};

const AboutSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      minHeight: { xs: 'auto', md: '80vh' },
      display: 'flex',
      alignItems: 'center',
      py: { xs: 2, md: 4 }
    }}>
      <Box sx={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'secondary.main',
              fontStyle: 'italic',
              mb: 2 
            }}
          >
            "Where curiosity meets code, innovation begins"
          </Typography>
          
          <Typography variant="h2" gutterBottom>
            Hi, I'm Aishwarya Jagadish
          </Typography>
          
          <Typography variant="h4" gutterBottom color="primary">
            Software Developer & ML Enthusiast
          </Typography>

          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '800px',
              mb: 4,
              color: '#e6f1ff',
              textAlign: 'left'
            }}
          >
            Software Developer at Keck School of Medicine of the University of Southern California
          </Typography>

          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              color: '#ffb6c1',
              mb: 4 
            }}
          >
            Interests
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: 'Software Engineering',
                icon: <CodeIcon sx={{ fontSize: 40 }}/>,
                desc: 'Full-Stack & System Design',
                quote: '"Transforming ideas into impactful products"'
              },
              { 
                title: 'Machine Learning',
                icon: <CodeIcon sx={{ fontSize: 40 }}/>,
                desc: 'Deep Learning & Neural Networks',
                quote: '"Where data meets intelligence"'
              },
              { 
                title: 'Data Science',
                icon: <StorageIcon sx={{ fontSize: 40 }}/>,
                desc: 'Analysis & Visualization',
                quote: '"Finding patterns in chaos"'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(17, 34, 64, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 182, 193, 0.1)',
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      textAlign: 'center',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                      },
                      '&:hover': {
                        border: '1px solid rgba(255, 182, 193, 0.3)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
                      }
                    }}
                  >
                    <Box sx={{ color: '#ffb6c1', mb: 3 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ color: '#e6f1ff', mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#8892b0', mb: 3 }}>
                      {item.desc}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontStyle: 'italic',
                        color: '#ffb6c1'
                      }}
                    >
                      {item.quote}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home; 