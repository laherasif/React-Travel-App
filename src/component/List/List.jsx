import makeStyles from './style'
import { Grid , Typography  } from '@material-ui/core'
function List() {
    const classes = makeStyles()
    return (
        <div className={classes.Container}>
             <Typography>
                 Resturant , Hotel & Attraction around you
                 </Typography> 
        </div>
    )
}

export default List
