import React from "react"
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "./Link"

export const HiltonAppBar = () => {
  return (
    <AppBar position="static" style={{ marginBottom: "10px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ paddingRight: "5px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ paddingRight: "10px" }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              All hosts
            </Link>
          </Typography>
          &nbsp;
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ paddingRight: "10px" }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Hilton host
            </Link>
          </Typography>
          &nbsp;
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ paddingRight: "10px" }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Hilton post details
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
