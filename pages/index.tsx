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

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                uptime
            </Typography>
            <Typography variant="h5" component="div">
                85 %
            </Typography>
            <TrendingUpIcon />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function Home() {
  return (
      <>
          <Container maxWidth="xl">
              <Typography variant="h4" component="h1" gutterBottom>
                  Hilton
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                  Account summary
              </Typography>
              <Grid container spacing={1}>
                  <Grid xs={3}>
                      <Box sx={{ minWidth: 275 }}>
                          <Card variant="outlined">{card}</Card>
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
                      TABLE HERE
                  </Grid>
              </Grid>
          </Container>
      </>
  );
}
