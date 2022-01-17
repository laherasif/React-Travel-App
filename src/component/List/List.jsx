import makeStyles from './style'
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
function List() {
    const classes = makeStyles()
    return (
        <div className={classes.Container}>
            <Typography variant="h4">
                Resturant , Hotel & Attraction around you
                 </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem>Resturent</MenuItem>
                    <MenuItem>Resturent</MenuItem>
                    <MenuItem>Resturent</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem>Resturent</MenuItem>
                    <MenuItem>Resturent</MenuItem>
                    <MenuItem>Resturent</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List
