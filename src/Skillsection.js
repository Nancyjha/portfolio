import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

 import Button from '@mui/material/Button'; 
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
import Chip from '@mui/material/Chip';
 
 
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Skillsection() {
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
SKILLS        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Below is list of technology I've worked with. Please note that I don't claim to be the master of all of these skills
        </Typography>
           <Stack sx={{ mt: 2, mb: 2 }}  direction="row" spacing={2}>
      <Chip label="ReactJS" color='secondary' varient="text" />
      <Chip label="Redux" color='secondary' varient="text" />
      <Chip label="REST API" color='secondary' varient="text" />
      <Chip label="CSS3" color='secondary' varient="text" />
      <Chip label="HTML5" color='secondary' varient="text" />
      <Chip label="SCSS" color='secondary' varient="text" />
      </Stack>

      <Stack sx={{ mt: 2, mb: 2 }} direction="row" spacing={2}>

      <Chip label="Bootstrap" color='secondary' varient="text" />
      <Chip label="Github" color='secondary' varient="text" />
      <Chip label="figma" color='secondary' varient="text" />
      <Chip label="adobe XD" color='secondary' varient="text" />
      <Chip label="angular" color='secondary' varient="text" />
      <Chip label="UX design" color='secondary' varient="text" />

     </Stack>
     <Stack sx={{ mt: 2, mb: 2 }} direction="row" spacing={2}>

      <Chip label="Typescript" color='secondary' varient="text" />
      <Chip label="Solidity" color='secondary' varient="text" />
      <Chip label="Ethereum" color='secondary' varient="text" />
      <Chip label=" web3.js" color='secondary' varient="text" />
      <Chip label="api integration" color='secondary' varient="text" />
      <Chip label="UX design" color='secondary' varient="text" />

     </Stack>
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
               
             <Button color="secondary" size="large" component="label" variant="text" startIcon={<Face3Icon />}>
             <Link to={`/`}>Go To Home</Link>

</Button>
              
            </Grid>
          
        </Grid>
       </Container>
     </ThemeProvider>
  );
}