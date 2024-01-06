import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
 import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Grid from '@mui/material/Grid';
import Face3Icon from '@mui/icons-material/Face3';
import { Link } from 'react-router-dom';

 // TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Portfoliosection() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h3" component="h4" gutterBottom>
          PERSONAL PROJECTS
    </Typography>
           
        
              <Card sx={{ display: 'flex',mt: 8, mb: 2  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          TextRolodox (07/2021 - 08/2021)          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          TextRolodox is a text utility application which helps user to
format text and find out spell check errors on the same, it is build with ReactJs, RESTful API and JavaScript/ES6+ inbuilt
function </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
           
          
        </Box>
      </Box>
       
    </Card>

    <Card sx={{ display: 'flex',mt: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          E-commerce Clone (04/2022 - 06/2022)
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          This is a store built with react which implements the working
of redux via storing the project details in global and sharing
it among different components without prop drilling.          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
           
          
        </Box>
      </Box>
       
    </Card>

    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Crowdfunding app (02/2023 - 04/2023)          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          This is a decentralized crowdfunding app built on the
ethereum blockchain with a user-friendly frontend powered
by ThirdWeb ReactJs . This app utilize smart contract to facilitate transparent and
secure investment processes.
Investors will be able to browse and invest in various projects, track their investment, and receive regular updates on the progress of their investments through the intuitive
and responsive frontend          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
           
          
        </Box>
      </Box>
       
    </Card>

        </Container>
        <Grid container spacing={4} justifyContent="space-evenly">
             <Grid item xs={6} sm={3}  >
               
             <Button color="secondary" size="large" component="label" variant="text" startIcon={<Face3Icon />}>
             <Link to={`/`}>Go To Home</Link>

</Button>
              
            </Grid>
          
        </Grid>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
           
        </Box>
      </Box>
    </ThemeProvider>
  );
}