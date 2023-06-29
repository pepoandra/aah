import React from 'react';
import { makeStyles, Box, Typography, Card, CardContent, Link } from '@material-ui/core';
import Project from "../Components/Project";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoWrapper: {
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: 0,
    margin: 'auto',
    width: '80%',
  },
  videoIframe: {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  projectWrapper: {
    marginTop: theme.spacing(2),
    width: '80%',
    display: 'flex',
    gridGap: theme.spacing(2),
    justifyContent: 'center',
  },
  projectCard: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      title: "Jules au pays d'Asha (2023)",
      role: "Data Wrangler",
      subsection: 'Film',

      tasks: [
        "Did this as data wrangler",
        "Did that as data wrangler",
        "Did this other thing as data wrangler",
      ],
      link: "https://www.imdb.com/title/tt26742497/?ref_=nm_knf_t_1",
    },
    {
      title: "L'été des chaleurs (2023)",
      role: "Data Wrangler",
      subsection: 'Short',

      tasks: [
        "Did this as data wrangler",
        "Did that as data wrangler",
        "Did this other thing as data wrangler",
      ],
      link: "https://www.imdb.com/title/tt26690090/?ref_=nm_knf_t_3",
    },
    {
      title: "Mushers: Conquering the Yukon Quest (2016)",
      role: "Production Assistant",
      subsection: 'TV Series',
      tasks: [
        "Did this as production assistant",
        "Did that as production assistant",
        "Did this other thing as production assistant",
      ],
      link: "https://www.imdb.com/title/tt5513874/?ref_=nm_knf_t_2",
    },
  ];

  return (
    <Box className={classes.section}>
      <Typography variant="h2" align="center" gutterBottom>
        Projects
      </Typography>
      <Box className={classes.videoWrapper}>
        <div className={classes.videoIframe}>
          <iframe
            title="Vimeo Video"
            src="https://player.vimeo.com/video/376780101"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </Box>
      <Box className={classes.projectWrapper}>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  );
};


export default Projects;
