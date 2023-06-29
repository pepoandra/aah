import { VideoLibrary, Videocam, PhotoCamera } from '@mui/icons-material';

import React from 'react';
import { makeStyles, Box, Typography, Card, CardContent, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  projectCard: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: '2px solid #fff',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
  },
  projectTitle: {
    fontWeight: 'bold',
  },
  projectRole: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  taskContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
  },
  taskText: {
    marginLeft: theme.spacing(1),
  },
}));

const Project = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.projectCard} elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom className={classes.projectTitle}>
          <Link href={project.link} color="inherit" underline="none">
            {project.title}
          </Link>
        </Typography>
        {project.subsection && (
          <Typography variant="subtitle2" gutterBottom>
            {project.subsection}
          </Typography>
        )}
        <Typography variant="subtitle1" gutterBottom className={classes.projectRole}>
          {project.role}
        </Typography>
        {project.tasks.map((task, index) => (
          <Box key={index} className={classes.taskContainer}>
            <Videocam />
            <Typography variant="body2" component="p" className={classes.taskText}>
              {task}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Project;
