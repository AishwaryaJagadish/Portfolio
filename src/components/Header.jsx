import React, { useState, useEffect, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
  Slide,
  Tooltip,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sections = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'organizations', label: 'Organizations' },
    { id: 'awards', label: 'Awards' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'volunteering', label: 'Volunteering' }
  ], []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = isMobile ? 64 : 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = isMobile ? 80 : 100;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - headerOffset &&
            scrollPosition < offsetTop + offsetHeight - headerOffset
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, isMobile]);

  const socialLinks = (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Tooltip title="GitHub">
        <IconButton
          component="a"
          href="https://github.com/AishwaryaJagadish"
          target="_blank"
          sx={{ color: 'primary.main' }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/aishwarya-jagadish-28794b209/"
          target="_blank"
          sx={{ color: 'primary.main' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={true}>
        <AppBar
          position="fixed"
          sx={{
            background: 'rgba(10, 25, 47, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
            zIndex: 1200
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 }, gap: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#ffb6c1',
                fontWeight: 'bold',
                letterSpacing: 1,
                flexShrink: 0,
              }}
            >
              AJ
            </Typography>

            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 0.5,
                  flex: 1,
                  mx: 1,
                  overflowX: 'auto',
                  flexWrap: 'nowrap',
                  justifyContent: 'flex-start',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255, 182, 193, 0.4) transparent',
                  '&::-webkit-scrollbar': { height: 4 },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(255, 182, 193, 0.4)',
                    borderRadius: 4,
                  },
                }}
              >
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    size="small"
                    sx={{
                      color: activeSection === section.id ? '#ffb6c1' : '#8892b0',
                      position: 'relative',
                      minWidth: 'auto',
                      flexShrink: 0,
                      px: 1.25,
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: activeSection === section.id ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: '0',
                        backgroundColor: '#ffb6c1',
                        transition: 'width 0.3s ease-in-out'
                      },
                      '&:hover': {
                        color: '#ffb6c1',
                        '&::after': { width: '100%' }
                      }
                    }}
                  >
                    {section.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
              {!isMobile && socialLinks}
              {isMobile && (
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ color: '#ffb6c1' }}
                  aria-label="Open navigation menu"
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0a192f',
            borderLeft: '1px solid rgba(255, 182, 193, 0.15)',
            display: 'flex',
            flexDirection: 'column',
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, flexShrink: 0 }}>
          <Typography variant="h6" sx={{ color: '#ffb6c1', fontWeight: 'bold' }}>
            Menu
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#ffb6c1' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1, overflowY: 'auto', flex: 1, pb: 2 }}>
          {sections.map((section) => (
            <ListItemButton
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: activeSection === section.id ? '#ffb6c1' : '#8892b0',
                bgcolor: activeSection === section.id ? 'rgba(255, 182, 193, 0.1)' : 'transparent',
              }}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2, py: 2, display: 'flex', gap: 1, flexShrink: 0 }}>
          {socialLinks}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
