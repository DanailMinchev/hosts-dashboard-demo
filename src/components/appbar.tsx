import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import React from "react"


export const HiltonAppBar = () => {
    return (
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
    )
}