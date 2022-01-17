import { AppBar, Typography, InputBase, Toolbar, Box } from '@material-ui/core'
import { Search } from '@material-ui/icons'
// import { Autocomplete } from '@react-google-maps/api'
import makeStyles from './style'
function Header() {

    const classes = makeStyles()

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4" className={classes.title}>Travel Advisor</Typography>
                    <Box className={classes.box} >
                        <Typography varient="h5">
                            Expolore more
                    </Typography>

                        {/* <Autocomplete> */}
                        <div className={classes.input_wrapper}>
                            <div className={classes.search_Icon}>
                                <Search />
                            </div>
                            <InputBase placeholder="...search" classes={{ root : classes.inputRoot , input : classes.inputInput}} />
                        </div>


                        {/* </Autocomplete> */}
                    </Box>

                </Toolbar>

            </AppBar>

        </>
    )
}

export default Header
