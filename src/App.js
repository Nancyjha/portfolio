 import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
 import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Face3Icon from '@mui/icons-material/Face3';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
 import { Link } from 'react-router-dom';
 import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          
          <nav>

          <Stack               sx={{ mt: 2, mb: 3 }}             
 direction="row" spacing={2}>
    <Link to={`skill`}>
  <Item variant="text"
              color="text.secondary"
              sx={{ mt: 2 }}             >
            Skills
              </Item></Link>
              <Link to={`contact`}>
  <Item  variant="text"
              color="text.secondary"
              sx={{ mt: 2  }}
             >

              Contact Me 
           </Item></Link>
           <Link to={`portfolio`}>
  <Item variant="text"
               color="text.secondary"
              sx={{ mt: 2  }}             >
             portfolio
           </Item></Link>
</Stack>
 
          </nav>
        
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hi, I'm Nancy Jha. I design and build User Interfaces :)
         </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        I have been developing my skills in react since the past 1 year and I've developed a strong understanding of web development concepts which enables me to effectively convert designs and wireframes into visually appealing and responsive user interface components. I have experience working in cross-functional teams and can effectively collaborate with backend developers to integrate frontend code with server-side logic. This includes handling data fetching, authentication, and implementing business logic on the client-side.
        </Typography>
      </Container>
      {/* End hero unit */}
       
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
             <Grid item xs={6} sm={3}  >
               
             <Link to={`portfolio`}>             <Button style={{  textDecoration: 'none'}} color="secondary" size="large" component="label" variant="text" startIcon={<Face3Icon />}>portfolio</Button>

</Link>

              
            </Grid>
          
        </Grid>
       </Container>
     </ThemeProvider>
  );
}