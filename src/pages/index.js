import React, { useState } from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import TrendingDownIcon from "@mui/icons-material/TrendingDown"
import Battery90Icon from "@mui/icons-material/Battery90"
import SimpleTable, { createData } from "../components/simpleTable"
import { HiltonAppBar } from "../components/appbar"

const cardUptime = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Uptime
      </Typography>
      <Typography variant="h5" component="div">
        85 %
      </Typography>
      <TrendingUpIcon
        style={{
          color: "green",
        }}
      />
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
)

const cardUtilisation = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Utilisation
      </Typography>
      <Typography variant="h5" component="div">
        70 %
      </Typography>
      <TrendingDownIcon
        style={{
          color: "red",
        }}
      />
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
)

const cardConsumption = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Consumption
      </Typography>
      <Typography variant="h5" component="div">
        300 kWh
      </Typography>
      <Battery90Icon
        style={{
          color: "red",
        }}
      />
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
)

const cardRevenue = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Revenue
      </Typography>
      <Typography variant="h5" component="div">
        £10,000
      </Typography>
      <TrendingUpIcon
        style={{
          color: "green",
        }}
      />
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
)

export default function Index() {
  const [tableRows, setTableRows] = useState([
    createData("0001", "E3HFG", true, 60, 45, 18.7, "24/09/2023", "08/10/2022"),
    createData("0002", "E141PQ", false, 20, 8, 5.8, "03/01/2023", "07/08/2022"),
  ])

  return (
    <>
      <HiltonAppBar />
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
          Site Issues
        </Typography>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <SimpleTable tableRows={tableRows} setTableRows={setTableRows} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
