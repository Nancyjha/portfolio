import * as React from 'react';
 import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
   import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
 import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

 
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Contactform() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           
          <Typography component="h1" variant="h5">
            Type Your Message Here
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  color='secondary'
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  color='secondary'

                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  color='secondary'

                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  color='secondary'

                  name="message"
                  label="message"
                  type="message"
                  id="message"
                  autoComplete="new-message"
                />
              </Grid>
               
            </Grid>
            <Button
                              color='secondary'

              type="submit"
              fullWidth
              size='medium'
              variant="text"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
             
          </Box>
        </Box>
       </Container>
    </ThemeProvider>
  );
}