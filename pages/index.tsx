import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MenuIcon from '@mui/icons-material/Menu';
import Battery90Icon from '@mui/icons-material/Battery90';
import SimpleTable from '../src/components/simpleTable';
import { AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const cardUptime = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Uptime
            </Typography>
            <Typography variant="h5" component="div">
                85 %
            </Typography>
            <TrendingUpIcon style={{
                color: 'green'
            }} />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

const cardUtilisation = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Utilisation
            </Typography>
            <Typography variant="h5" component="div">
                70 %
            </Typography>
            <TrendingDownIcon style={{
                color: 'red'
            }} />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

const cardConsumption = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Consumption
            </Typography>
            <Typography variant="h5" component="div">
                300 kWh
            </Typography>
            <Battery90Icon style={{
                color: 'red'
            }} />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

const cardRevenue = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Revenue
            </Typography>
            <Typography variant="h5" component="div">
                £10,000
            </Typography>
            <TrendingUpIcon style={{
                color: 'green'
            }} />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function Home() {
  return (
      <>
        <AppBar position='static' style={{ marginBottom:'10px' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} style={{paddingRight:'5px'}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" style={{paddingRight: '10px'}} sx={{display: { xs: 'none', md: 'flex' }}}>
                        Hosts
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div" style={{paddingRight: '10px'}} sx={{display: { xs: 'none', md: 'flex' }}}>
                        Hilton
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div" style={{paddingRight: '10px'}} sx={{display: { xs: 'none', md: 'flex' }}}>
                        Hilton Details
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
          <Container maxWidth="xl">
              <Typography variant="h4" component="h1" gutterBottom>
                  Hilton
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                  Account summary
              </Typography>
              <Grid container spacing={1}>
                  <Grid xs={12} md={3}>
                      <Box sx={{ minWidth: 275 }}>
                          <Card variant="outlined">{cardUptime}</Card>
                      </Box>
                  </Grid>
                  <Grid xs={12} md={3}>
                      <Box sx={{ minWidth: 275 }}>
                          <Card variant="outlined">{cardUtilisation}</Card>
                      </Box>
                  </Grid>
                  <Grid xs={12} md={3}>
                      <Box sx={{ minWidth: 275 }}>
                          <Card variant="outlined">{cardConsumption}</Card>
                      </Box>
                  </Grid>
                  <Grid xs={12} md={3}>
                      <Box sx={{ minWidth: 275 }}>
                          <Card variant="outlined">{cardRevenue}</Card>
                      </Box>
                  </Grid>
              </Grid>
              <Typography variant="h6" component="h2" gutterBottom>
                  Site summary
              </Typography>
              <Grid container spacing={1}>
                  <Grid xs={12}>
                      TODO
                  </Grid>
              </Grid>
              <Typography variant="h6" component="h2" gutterBottom>
                  Issues
              </Typography>
              <Grid container spacing={1}>
                  <Grid xs={12}>
                      <SimpleTable />
                  </Grid>
              </Grid>
          </Container>
      </>
  );
}
