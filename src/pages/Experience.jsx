import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Card, CardContent, Chip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [

    {
      title: "Software Developer @ Keck School of Medicine of the University of Southern California",
      duration: "Jul 2026 - Present",
      location: "Los Angeles, California, United States",
      description: [
        "Engineering scalable full-stack clinical web applications featuring patient scheduling, modular React components and dynamic research portals, reducing feature development time by 30% through reusable UI architecture.",
        "Developing live analytics dashboards and end-to-end clinical data pipelines for ADRC, GI and DBS research studies, automating data processing workflows, reducing manual reporting effort by 50% and enabling real-time visualization of key research metrics."
      ],
      skills: ["Python", "React", "Flask", "Data Engineering", "Analytics", "Full-Stack Development"]
    },
    {
      title: "Machine Learning Engineer Intern @ ReferU.AI",
      duration: "June 2025 - Present",
      location: "Los Angeles, California, United States",
      description: [
        "Developed Statute Tracker’s citation detection system by integrating GPT-4 with pattern-matching algorithms, enabling real-time NLP-based monitoring of legal statute updates, improving extraction accuracy by 35% and reducing processing latency by 22%.",
        "Built a testing framework with CourtListener API, automated caching and preprocessing pipelines to parse and verify citations across federal, state and regulatory codes, increasing verification throughput by 3× for 50K+ documents."
      ],
      skills: ["Machine Learning", "Python", "LLM", "API", "Testing"]
    },
    
    {
      title: "Research Assistant @ University of Southern California",
      duration: "January 2025 - Present",
      location: "Los Angeles, California, United States",
      description: [
        "Working on early detection of Alzheimer's disease using MRI-based neuroimaging analysis and machine learning to identify neurodegenerative biomarkers.",
        "Leveraging brain imaging analysis to detect key biomarkers and enable accurate classification of disease progression through advanced feature extraction."
      ],
      skills: ["Neuroimaging", "Machine Learning", "Alzheimer's Disease", "MRI Analysis"]
    },
    {
      title: "Software Engineering Intern @ Transo",
      duration: "November 2023 - February 2024",
      location: "Bangalore, Karnataka, India",
      description: [
        "Designed and implemented optimization models for the Vehicle Routing Problem using linear programming and heuristic algorithms, improving route computation efficiency by 12% across 1K+ daily routes while enabling scalable, data-driven decision-making for distributed transportation networks.",
        "Performed end-to-end logistics analysis on 2M+ records, identifying system bottlenecks and delivering reliable, fault-tolerant solutions that reduced operational costs by 8% and enhanced overall system performance and operational efficiency."
      ],
      skills: ["Python", "Optimization", "Data Analysis", "Logistics"]
    },
    {
        title: "Machine Learning Intern @ Anand Diagnostics Laboratory",
        duration: "September 2023 - March 2024",
        location: "Bangalore, Karnataka, India",
        description: [
          "Implemented image segmentation pipelines using TensorFlow and OpenCV for bacterial genus and species classification, leveraging preprocessing and data augmentation to increase training data diversity by 3× and improve model robustness.",
          "Designed and trained CNN-based classification models, automating bacterial identification workflows and reducing manual image analysis effort by approximately 45% while improving the scalability of diagnostic processes."
        ],
        skills: ["Deep Learning", "Image Processing", "CNNs", "Microbiology"]
    },
    {
      title: "Software Engineering Intern @ CSIR - National Aerospace Laboratories",
      duration: "October 2023 - November 2023",
      location: "Bangalore, Karnataka, India",
      description: [
        "Evaluated anomaly detection algorithms (ARIMA, LSTM) for aerospace braking systems, implementing feature engineering, data preprocessing pipelines and scalable workflows to improve predictive accuracy by 7% in safety-critical environments.",
        "Designed and deployed end-to-end, data-driven monitoring and alerting systems, enabling proactive maintenance and reducing system failure response time by 19%, enhancing fault tolerance and operational efficiency in large-scale distributed environments."
      ],
      skills: ["Time Series Analysis", "Machine Learning", "Research", "Anomaly Detection"]
    },
    {
      title: "Open Source Contributor @ Hacktoberfest",
      duration: "October 2023",
      location: "Remote",
      description: [
        "Implemented and fine-tuned advanced deep learning and image segmentation pipelines using TensorFlow, improving prediction accuracy by 18% and integrating models into production-grade Flask APIs with low-latency inference and scalable deployment.",
        "Optimized backend workflows and designed modular GUI components, reducing processing time and enhancing system responsiveness while improving throughput, reliability and performance through data preprocessing and augmentation techniques."
      ],
      skills: ["Open Source", "Git", "Python", "JavaScript", "Machine Learning"]
    },
    {
      title: "Software Engineering Intern @ Brane Enterprises",
      duration: "March 2023 - June 2023",
      location: "Bangalore, Karnataka, India",
      description: [
        "Optimized backend microservices using Java and Spring Boot, designing modular, reusable components and integrating REST APIs to build distributed and parallel systems, reducing downtime by 30% and supporting 500k+ daily transactions.",
        "Monitored and maintained production systems with Grafana dashboards, logging and diagnosing bottlenecks to ensure high availability and fault tolerance, achieving uptime and enhancing overall system performance for distributed environments."
      ],
      skills: ["Spring Boot", "Kafka", "Microservices", "Grafana", "MongoDB", "Elasticsearch"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: { xs: 4, md: 8 }, textAlign: 'center' }}>
        Experience
      </Typography>

      <Timeline
        position={isMobile ? 'right' : 'alternate'}
        sx={{
          px: { xs: 0, md: 2 },
          '& .MuiTimelineConnector-root': {
            backgroundColor: 'rgba(255, 182, 193, 0.3)',
          },
          '& .MuiTimelineContent-root': {
            px: { xs: 1, md: 2 },
          },
        }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ mb: 2, overflow: 'hidden' }}>
                  <CardContent sx={{ p: { xs: 2, md: 3 }, '&:last-child': { pb: { xs: 2, md: 3 } } }}>
                    <Typography variant="h6" color="primary" sx={{ wordBreak: 'break-word' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {exp.duration} | {exp.location}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      {exp.description.map((desc, i) => (
                        <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                          • {desc}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {exp.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
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
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
};

export default Experience; 