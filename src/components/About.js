import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'Machine Learning', 'Data Analysis', 'Jupyter Notebook',
  'Web Scraping', 'Pandas', 'NumPy', 'Scikit-learn',
  'Data Visualization', 'Git', 'GitHub', 'Data Science'
];

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
        About Me
      </Typography>
      
      <Typography variant="body1" paragraph>
        I am an aspiring Data Scientist with a strong foundation in machine learning, statistics, and programming. Currently pursuing opportunities to apply my skills in real-world data science projects, I am passionate about transforming complex data into meaningful insights.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Education
      </Typography>
      <Typography variant="body1" paragraph>
        I hold a Bachelor's degree in Computer Science, where I developed a strong foundation in programming, algorithms, and data structures. Throughout my academic journey, I've completed several courses in machine learning, statistical analysis, and data visualization.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Skills & Expertise
      </Typography>
      <Typography variant="body1" paragraph>
        • Programming Languages: Python, R, SQL
        • Machine Learning: Scikit-learn, TensorFlow, PyTorch
        • Data Analysis: Pandas, NumPy, Matplotlib, Seaborn
        • Tools: Jupyter Notebook, Git, Docker
        • Soft Skills: Problem-solving, Communication, Team Collaboration
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Projects & Learning
      </Typography>
      <Typography variant="body1" paragraph>
        I am actively working on personal projects that demonstrate my capabilities in data science and machine learning. These include implementing various ML algorithms, participating in Kaggle competitions, and building end-to-end data science solutions. I'm constantly learning and staying updated with the latest developments in the field through online courses and practical applications.
      </Typography>

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
          About Me
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
                Who I Am
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                I am an aspiring Data Scientist with a strong foundation in machine learning and data analysis.
                My journey in data science began with a fascination for how data can be transformed into actionable insights.
                I am dedicated to developing my skills in data-driven decision making and enjoy tackling complex problems through analytical thinking.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                When I'm not coding or analyzing data, I focus on learning new technologies, staying updated with the latest developments
                in AI, and working on personal projects to enhance my skills. I'm passionate about growing in this dynamic field and making meaningful contributions.
              </Typography>
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
                height: '100%',
                borderRadius: 2
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontSize: '1.8rem', mb: 3 }}>
                Professional Experience
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.4rem' }}>
                  National Changhua University of Education
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.1rem', my: 1 }}>
                  Summer Research Intern | May 2024 - July 2024 | Changhua, Taiwan
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, fontSize: '1.1rem' }}>
                  • Developed and implemented machine learning models designed to translate sign language into text, utilizing advanced algorithms and frameworks such CNN and LSTM
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: '1.1rem' }}>
                  • Played a key role in data collection and annotation, ensuring high-quality datasets to train and refine these models
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.4rem' }}>
                  PricewaterhouseCoopers
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.1rem', my: 1 }}>
                  Trainee Intern | Feb 2024 - Jul 2024 | Remote
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, fontSize: '1.1rem' }}>
                  • Completed a comprehensive internship at PwC Launchpad, mastering key IT, Database management, Salesforce, and Java programming skills
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: '1.1rem' }}>
                  • Gained practical experience in troubleshooting technical issues and supporting daily operational tasks
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          variant="h3"
          component={motion.h3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          sx={{ 
            mb: 6,
            mt: 8,
            fontSize: { xs: '2rem', md: '2.8rem' }
          }}
        >
          Skills
        </Typography>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={skill}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>{skill}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 