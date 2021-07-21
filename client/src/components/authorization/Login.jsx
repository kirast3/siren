import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import 'typeface-roboto';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import teal from "@material-ui/core/colors/teal";
import {login} from "../../actions/user";

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
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Created Jacks /2 © '}
            <Link color="inherit" href="http://www.viti.edu.ua ">
                Our Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#ff5722' ,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function handleSubmit(event) {
    event.preventDefault();
    // console.log( 'Name:', firstName, 'Password: ', password);

}

export default function SignIn() {
    const classes = useStyles();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [numbervch, setNumbervch] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeNumbervch = (event) => {
        setNumbervch(event.target.value);
    };


    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Вхід
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                               autoComplete="current-firstName"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Ім'я"
                                autoFocus
                                value={firstName}
                               onChange={handleChangeFirstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Прізвище"
                                name="lastName"
                                autoComplete="current-lastName"
                                value={lastName}
                                onChange={handleChangeLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="numbervch"
                                label="Номер військової частини"
                                name="numbervch"
                                autoComplete="current-numbervch"
                                value={numbervch}
                                onChange={handleChangeNumbervch}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </Grid>


                    </Grid>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запам'ятати мене"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => dispatch(login(firstName,lastName,numbervch, password))}
                    >
                       Ввійти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Забули пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Registration" variant="body2">
                                {"Ще не маєте аккаунта? Зареєструйтеся"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        </ThemeProvider>
    );
}
