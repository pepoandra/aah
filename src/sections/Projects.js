import React from 'react';
import styled from 'styled-components';
import Project from "../Components/Project";

const Projects = () => {

  const projects = [
    {
      title: "Jules au pays d'Asha (2023)",
      role: "Data Wrangler",
      tasks: ["Did this as data wrangler", "Did that as data wrangler", "Did this other thing as data wrangler"],
      link: "https://www.imdb.com/title/tt26742497/?ref_=nm_knf_t_1",
    },
    {
      title: "L'été des chaleurs (2023)",
      role: "Data Wrangler",
      tasks: ["Did this as data wrangler", "Did that as data wrangler", "Did this other thing as data wrangler"],
      link: "https://www.imdb.com/title/tt26690090/?ref_=nm_knf_t_3",
    },
    {
      title: "Mushers: Conquering the Yukon Quest (2016)",
      role: "Production Assistant",
      tasks: ["Did this as production assistant", "Did that as production assistant", "Did this other thing as production assistant"],
      link: "https://www.imdb.com/title/tt5513874/?ref_=nm_knf_t_2",
    },
  ];

  return (
    <Grid container direction="column" alignItems="center" className={classes.section}>
      <Grid item>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
      </Grid>
      <Grid item>
        <Box className={classes.videoWrapper}>
          <iframe
            title="Vimeo Video"
            src="https://player.vimeo.com/video/376780101"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className={classes.videoIframe}
          />
        </Box>
      </Grid>
      <Grid item container justify="center">
        {projects.map((project) => (
          <Grid item key={project.title}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;



const Section = styled.section`
  background-color: #000;
  color: #fff;
  padding: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  .video-responsive {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
    margin:auto;
  }

  .video-responsive iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
`;





