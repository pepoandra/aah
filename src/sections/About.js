import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import { VideoLibrary, Videocam, PhotoCamera } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#000',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: theme.spacing(2),
    maxWidth: '64%', // Set the desired width
    margin: '0 auto', // Center the card horizontally
    '& .MuiPaper-root': {
      color: 'inherit',
      backgroundColor: 'inherit',
    },
  },
  icon: {
    fontSize: '2rem',
    marginRight: theme.spacing(1),
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography variant="h4" className={classes.name} gutterBottom>
          Poto Poto
        </Typography>
        <Typography variant="body1" paragraph>
          <VideoLibrary className={classes.icon} />
          Video Editor | <Videocam className={classes.icon} />
          Filmmaker | <PhotoCamera className={classes.icon} />
          Photographer
        </Typography>
        <Typography variant="body2">
          Hi, I'm Poto Poto, a passionate video editor with expertise in storytelling and visual
          effects. I have several years of experience working on various projects, ranging from
          short films to documentaries. My goal is to create compelling and captivating videos that
          leave a lasting impact on the audience. I believe that every frame has the power to convey
          a powerful message and evoke emotions. Let's collaborate and bring your vision to life
          through the art of video editing.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
