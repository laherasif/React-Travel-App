import React from 'react'
import { Grid,  } from '@material-ui/core'
import List from '../List/List'
import Map from '../Map/Map'
function Main() {
    return (
        <>

            <Grid container>
                <Grid item xs={4}>
                    <List/>
                </Grid>
                <Grid item xs={8}>
                    <Map/>
                </Grid>
            </Grid>


        </>
    )
}

export default Main
