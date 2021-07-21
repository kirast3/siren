import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import {Container,Paper ,Grid,Typography,Button} from "@material-ui/core";
import {Link} from "react-router-dom";
//import {Link} from "react-router-dom";
import Image from "../../assets/img/вип.jpg";

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
        secondary: {
            main: '#ff5722',
        },
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    mainFeaturesPost:{
        position:"relative",
        color:theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
    },
    mainFeaturesPostContent:{
        position:"relative",
        margin: theme.spacing(0),
        padding:theme.spacing(0),

    },
    overlay:{
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        background:"rgba(0,0,0,.3)"
    }

}));
export default function Main() {

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        
            <Paper className={classes.mainFeaturesPost } style={{backgroundImage: `url(${Image})`}}>
            <Container maxWidth="lg" >
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component="h1"
                                variant="h3"
                                color="secondary"
                                gutterBottom
                            >
                                Siren-M
                            </Typography>
                            <Typography
                                variant="h5"
                                color="primary"
                                paragraph
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </Typography>


                        </div>

                    </Grid>
                </Grid>
            </Container>
            </Paper>

      
            </ThemeProvider>
    );
};

