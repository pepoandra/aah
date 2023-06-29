import React from 'react';
import { Grid, Divider, makeStyles } from '@material-ui/core';
import { Link as ScrollLink, Element } from 'react-scroll';
import styled from 'styled-components';
import About from './sections/About';
import Projects from './sections/ProjectUI';
import Contact from './sections/Contact';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: '#fff',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Main>
      <Nav>
        <StyledLink to="projects" smooth={true}>Projects</StyledLink>
        <StyledLink to="about" smooth={true}>About</StyledLink>
        <StyledLink to="contact" smooth={true}>Contact</StyledLink>
      </Nav>
      <Content>
        <Element name="projects">
          <Section>
            <Projects />
          </Section>
        </Element>
        <Divider className={classes.divider} />
        <Element name="about">
          <Section>
            <About />
          </Section>
        </Element>
        <Divider className={classes.divider} />
        <Element name="contact">
          <Section>
            <Contact />
          </Section>
        </Element>
      </Content>
    </Main>
  );
};

export default App;

const Main = styled.main`
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  padding: 10px 0;
  background: #000;
  width: 100%;
  z-index: 999;
`;

const StyledLink = styled(ScrollLink)`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 1em;
  background: #000;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 15px;
  text-align: center;
`;

const Content = styled.div`
  margin-top: 60px;
`;

const Section = styled(Grid)`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;
