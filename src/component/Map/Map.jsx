import makeStyles from './style'
import { Typography, Grid , } from '@material-ui/core'
import  GoogleMapReact  from 'google-map-react'
function Map() {
    const classes = makeStyles()
    return (
        <div className={classes.mapcontainer}>
            <GoogleMapReact
             bootstrapURLKeys={{key : "AIzaSyAvLWZqK0x_Gxf0l0iSuEn9tmbIJYBnzgw"}}
             defaultCenter={''}
             defaultZoom={14}
             margin={[50 , 50 , 50 , 50]}
             options={''}
             onChange={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
