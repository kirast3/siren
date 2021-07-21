import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import {Link} from "react-router-dom";
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
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root} >
            <AppBar position="static"  >
                <Toolbar  >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to = '/'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        Siren-M
                    </Typography>
                    <Button className={classes.menuButton} color="inherit" variant="outlined" component={Link} to = '/login' >Вхід</Button>
                    <Button className={classes.menuButton} color="secondary" variant="contained" component={Link} to ='/registration'>Реєстрація</Button>
                </Toolbar>
            </AppBar>
        </div>
        </ThemeProvider>
    );
}
