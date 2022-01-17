import makeStyles from './style'
// import { Typography, Grid , } from '@material-ui/core'
import  GoogleMapReact  from 'google-map-react'
function Map() {
    const classes = makeStyles()

   const coordinates = { lat : 0 , lng : 0}
    return (
        <div className={classes.mapcontainer}>
            <GoogleMapReact
             bootstrapURLKeys={{key : "AIzaSyCogAtWuwm0DXxi1IPAOGk4XXZ_tQgFEKE"}}
             defaultCenter={coordinates}
             center={coordinates}
             defaultZoom={14}
             margin={[50 , 50 , 50 , 50]}
             options={''}
             onChange={''}
             onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
