import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const projects = [
  {
    title: "MedCare",
    description: "Healthcare prediction platform using machine learning models for disease prediction and personalized healthcare services.",
    image: "https://www.healthcareitnews.com/sites/hitn/files/AI-ML-Healthcare-2023-712.jpg",
    tags: ["Python", "Flask", "ReactJS", "ML", "XGBoost"],
    github: "https://github.com/AishwaryaJagadish/MedCare",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "ScholarSync Research",
    description: "Cross-domain academic research aggregation system using LLMs and RAG.",
    image: "https://www.springboard.com/blog/wp-content/uploads/2022/02/is-data-science-hard.png",
    tags: ["Python", "NLP", "FAISS", "Transformers"],
    github: "https://github.com/AishwaryaJagadish/ScholarSync",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "Pathfinding Visualizer",
    description: "Interactive visualization tool for pathfinding algorithms including A*, Dijkstra's, and BFS.",
    image: "https://raw.githubusercontent.com/AishwaryaJagadish/Pathfinding-Visualiser/main/preview.png",
    tags: ["Python", "Algorithms", "Visualization"],
    github: "https://github.com/AishwaryaJagadish/Pathfinding-Visualiser",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "Web Scraping Tool",
    description: "Advanced web scraping tool for data extraction and analysis using Python.",
    image: "https://www.scrapingbee.com/blog/web-scraping-101/cover.png",
    tags: ["Python", "BeautifulSoup", "Data Analysis"],
    github: "https://github.com/AishwaryaJagadish/Web-Scraping",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "Eclipse",
    description: "A 2D puzzle-platformer that combines physics-based traversal, light manipulation, and strategic puzzle-solving where players navigate by grappling onto shadows and controlling light.",
    image: "https://www.scrapingbee.com/blog/web-scraping-101/cover.png",
    tags: ["Unity", "Game Development"],
    github: "https://reyanshgupta.github.io/Eclipse/",
    category: "Games"
  },
  {
    title: "Mastermind",
    description: "Mastermind is a code-breaking game where players guess a 4-color code within 10 tries, receiving feedback on correct and incorrect positions after each guess.",
    image: "https://spring.io/img/spring.svg",
    tags: ["Java", "Spring Boot", "REST API"],
    github: "https://github.com/AishwaryaJagadish/Mastermind",
    category: "Games"
  },
  {
    title: "Sketch Your Dreams",
    description: "Interactive web platform for students with productivity tools and entertainment features.",
    image: "https://raw.githubusercontent.com/AishwaryaJagadish/Sketch-Your-Dreams/main/preview.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AishwaryaJagadish/Sketch-Your-Dreams",
    category: "Web Development"
  },
  {
    title: "Jackpot Slot",
    description: "Created a Python slot machine game with betting, random spins and winnings calculation.",
    image: "https://miro.medium.com/max/1400/1*3qy8p_M-FhQJ9k_wHaZf_Q.jpeg",
    tags: ["Python", "Pygame", "Game Development"],
    github: "https://github.com/AishwaryaJagadish/Jackpot-Slot",
    category: "Games"
  },
  {
    title: "Smart Irrigation System",
    description: "Developed a smart irrigation system using Arduino and sensors to automate watering of plants based on soil moisture levels.",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20220520182504/DataStructures-660x330.jpg",
    tags: ["Arduino", "Python", "IoT"],
    github: "https://github.com/AishwaryaJagadish/Smart-Irrigation-System",
    category: "IoT"
  },
  {
    title: "Line Following Bot",
    description: "Created a line following bot using sensors to navigate a line.",
    image: "https://www.v7labs.com/blog/content/images/2022/10/supervised-learning-hero.png",
    tags: ["Python", "IoT", "Line Following"],
    github: "https://github.com/AishwaryaJagadish/Line-Following-Bot",
    category: "IoT"
  },
  {
    title: "JingleBell Analytics",
    description: "Performed Exploratory Data Analysis (EDA) using pandas, matplotlib and seaborn libraries to enhance Customer Experience",
    image: "https://www.cisco.com/c/dam/en_us/solutions/cloud/cloud-security/assets/img/cloud-security-hero.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/AishwaryaJagadish/JingleBell-Analytics",
    category: "Data Analysis"
  },
  {
    title: "Face Detection",
    description: "Developed a face detection system using OpenCV and Haar Cascade Classifiers.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Python", "OpenCV", "Face Detection"],
    github: "https://github.com/AishwaryaJagadish/FaceDetection",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "PocketGuard",
    description: "Budget management web application built using React, Node.js, Tailwind CSS and users can track their income, expenses and budgets trained using ML models.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["React", "Node.js", "Machine Learning"],
    github: "https://github.com/AishwaryaJagadish/PocketGuard",
    category: "Web Development"
  },
  {
    title: "Optical Character Recognition",
    description: "Developed an Optical Character Recognition (OCR) system using Automation Anywhere.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Automation Anywhere", "OCR"],
    github: "https://github.com/AishwaryaJagadish/Optical-Character-Recognition",
    category: "Data Analysis"
  },
  {
    title: "Wine Quality Analysis",
    description: "Performed exploratory data analysis and built machine learning models to predict and evaluate wine quality based on physicochemical properties.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/AishwaryaJagadish/WineQualityAnalysis",
    category: "Data Analysis"
  },
  {
    title: "Weather Forecast",
    description: "Developed a weather forecast application using APIs to provide real-time weather updates and predictions based on user location.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap"],
    github: "https://github.com/AishwaryaJagadish/Weather-Forecast",
    category: "Web Development"
  },
  {
    title: "Self Driving Car",
    description: "Built a self-driving car model using computer vision and reinforcement learning for autonomous navigation.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap"],
    github: "https://github.com/AishwaryaJagadish/Self-Driving-Car",
    category: "Web Development"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Developed a credit card fraud detection system using machine learning to identify fraudulent transactions based on transaction patterns.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Python", "Machine Learning", "Credit Card Fraud Detection"],
    github: "https://github.com/AishwaryaJagadish/CreditCardFraudDetection",
    category: "Web Development"
  },
  {
    title: "Fake Article Prediction",
    description: "Developed a machine learning model to classify articles as fake or real based on text analysis and NLP techniques.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Python", "Machine Learning", "Fake Article Prediction"],
    github: "https://github.com/AishwaryaJagadish/FakeArticlePrediction",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "Dog vs Cat Prediction",
    description: "Created a deep learning model to classify images as either dogs or cats using convolutional neural networks.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Python", "Machine Learning", "Dog vs Cat Prediction"],
    github: "https://github.com/AishwaryaJagadish/DogvsCat-Prediction",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "Twilio Chatbot",
    description: "Developed a Twilio chatbot using Python and Flask to provide customer support and automate responses.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["Python", "Flask", "Twilio"],
    github: "https://github.com/AishwaryaJagadish/Twilio_chatbot_flask",
    category: "Artificial Intelligence and Machine Learning"
  },
  {
    title: "Insurance Management System",
    description: "Designed an insurance management system for efficient policy management, claims processing and customer interaction.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/AishwaryaJagadish/InsuranceManagementSystem ",
    category: "Web Development"
  },
  {
    title: "Bitcoin Tracker",
    description: "Built a Bitcoin tracker using APIs to monitor live prices and historical trends in real-time.",
    image: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/cf/71/CF71E_077.component.xl.ts=1687857779903.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/AishwaryaJagadish/BitcoinTracker",
    category: "Artificial Intelligence and Machine Learning"
  }

];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%' }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 2.5,
          height: '100%',
          minHeight: { xs: 'auto', md: '280px' },
          maxHeight: { xs: 'none', md: '300px' },
          background: 'rgba(17, 34, 64, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 182, 193, 0.1)',
          transition: 'all 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            border: '1px solid rgba(255, 182, 193, 0.3)',
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ color: '#e6f1ff', fontWeight: 600 }}
          >
            {project.title}
          </Typography>
          {project.github && (
            <IconButton
              component="a"
              href={project.github}
              target="_blank"
              sx={{ 
                color: '#ffb6c1',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  color: '#ff69b4'
                }
              }}
            >
              <GitHubIcon />
            </IconButton>
          )}
        </Box>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#8892b0',
            mb: 4,
            lineHeight: 1.6,
            flexGrow: 1
          }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              icon={<CodeIcon />}
              sx={{
                bgcolor: 'rgba(255, 182, 193, 0.2)',
                color: '#ffb6c1',
                border: '1px solid #ffb6c1',
                padding: '4px',
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

const Projects = () => {
  const categoryOrder = [
    'Artificial Intelligence and Machine Learning',
    'Web Development',
    'Data Analysis',
    'Games',
    'IoT',
  ];

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedProjects).sort((a, b) => {
    const orderA = categoryOrder.indexOf(a);
    const orderB = categoryOrder.indexOf(b);
    return (orderA === -1 ? categoryOrder.length : orderA) - (orderB === -1 ? categoryOrder.length : orderB);
  });

  return (
    <Box sx={{ py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
            Projects
          </Typography>
        </motion.div>

        {sortedCategories.map((category, categoryIndex) => {
          const categoryProjects = groupedProjects[category];
          return (
          <Box key={category} sx={{ 
            mb: categoryIndex === sortedCategories.length - 1 ? 0 : 6
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3,
                color: '#ffb6c1',
                borderBottom: '2px solid rgba(255, 182, 193, 0.3)',
                pb: 1,
                fontSize: { xs: '1.1rem', md: '1.35rem' },
                wordBreak: 'break-word',
              }}
            >
              {category}
            </Typography>

            <Grid container spacing={3} sx={{ mb: 2 }}>
              {categoryProjects.map((project, index) => (
                <Grid 
                  item 
                  xs={12} 
                  md={4} 
                  key={index}
                  sx={{
                    display: 'flex',
                    mb: 2
                  }}
                >
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Projects; 