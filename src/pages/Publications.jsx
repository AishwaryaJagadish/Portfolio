import React from 'react';
import { Box, Container, Typography, Grid, Paper, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const publications = [
  {
    title: "Enhancing Data Protection and Compliance through Cloud Security Solutions",
    journal: "International Journal for Multidisciplinary Research",
    year: "2023",
    link: "https://www.ijfmr.com/papers/2023/5/6634.pdf",
    tags: ["Cloud Security", "Data Protection", "Compliance"]
  },
  {
    title: "Ensuring Food Safety In The Digital Age: IoT Solutions For Food Quality Monitoring",
    journal: "International Journal for Multidisciplinary Research",
    year: "2023",
    link: "https://www.ijfmr.com/papers/2023/5/7722.pdf",
    tags: ["IoT", "Food Safety", "Quality Monitoring"]
  },
  {
    title: "In-Depth Analysis of Contemporary Image Enhancement Techniques and their Multifaceted Applications in Microbiology",
    journal: "International Journal for Research in Applied Science & Engineering Technology",
    year: "2023",
    link: "https://www.ijraset.com/best-journal/in-depth-analysis-of-contemporary-image-enhancement--techniques-and-their-multifaceted-applications-in-microbiology",
    tags: ["Image Enhancement", "Microbiology", "Computer Vision", "AI"]
  }
];

const PublicationCard = ({ publication }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={4}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 3
        }}
      >
        <Link
          href={publication.link}
          target="_blank"
          underline="none"
          sx={{
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            {publication.title}
          </Typography>
        </Link>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {publication.journal} • {publication.year}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {publication.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              icon={<SchoolIcon />}
              sx={{
                bgcolor: 'rgba(255, 182, 193, 0.2)',
                color: '#ffb6c1',
                border: '1px solid #ffb6c1',
                '&:hover': {
                  bgcolor: 'rgba(255, 182, 193, 0.3)',
                },
              }}
            />
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

const Publications = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
            Publications
          </Typography>
        </motion.div>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{
            '& .MuiGrid-item': {
              display: 'flex',
              flexDirection: 'column'
            }
          }}
        >
          {publications.map((publication, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PublicationCard publication={publication} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Publications; 