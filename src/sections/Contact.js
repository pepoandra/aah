import React from 'react';
import { makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  input: {
    color: '#000',
    width: 300,
    padding: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff', // Set the border color to white
      },
      '&:hover fieldset': {
        borderColor: '#fff', // Set the border color to white on hover
      },
    },
  },
  textarea: {
    color: '#000',
    width: 300,
    height: 150,
    padding: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff', // Set the border color to white
      },
      '&:hover fieldset': {
        borderColor: '#fff', // Set the border color to white on hover
      },
    },
  },
  button: {
    color: '#000',
    backgroundColor: '#fff',
    padding: theme.spacing(1, 2),
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Typography variant="h2" gutterBottom>
        Contact
      </Typography>
      <form action="https://formspree.io/f/xjvpbrkl" method="POST" className={classes.form}>
        <TextField
          type="text"
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          type="email"
          id="email"
          name="_replyto"
          label="Email"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          type="text"
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          className={classes.textarea}
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
