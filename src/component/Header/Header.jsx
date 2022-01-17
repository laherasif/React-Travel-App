import React from 'react'
import { AppBar, Typography, InputLabel, InputBase, Toolbar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { Autocomplete } from '@react-google-maps/api'
function Header() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                 <Typography variant="h4">Travel Advisor</Typography>
                </Toolbar>

            </AppBar>

        </>
    )
}

export default Header
