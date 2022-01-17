import makeStyles from './style'
import { Typography, FormControl, InputLabel, Select, MenuItem, Grid } from '@material-ui/core'
function List() {
    const classes = makeStyles()

    const place = [
        { name: "laher" },
        { name: "laher" },
        { name: "laher" },
        { name: "laher" },
        { name: "laher" },
    ]

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

            <Grid container spacing={3} className={classes.list} >
                {place?.map((item, i) => (
                        <Grid item xs={12}>
                           <Typography>
                               {item.name}
                           </Typography>
                        </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default List
