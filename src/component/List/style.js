import {  makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    Container:{
        padding: '20px'
    },
    formControl:{
        width: 120,
        margin: theme.spacing(1),
        marginBottom:'30px'

    },
    list:{
        height: '70vh',
        overflow : 'auto',
        border:'1pt solid yellow'
    }
}))
