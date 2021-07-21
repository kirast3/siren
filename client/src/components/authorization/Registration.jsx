import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import teal from "@material-ui/core/colors/teal";
import MenuItem from '@material-ui/core/MenuItem';
import {registration} from "../../actions/user";
import {Link as RouterLink} from "react-router-dom";

const currencies = [

    {
        value: 'graduate',
        label: 'Випускник ВВНЗ',
    },
    {
        value: 'officer',
        label: 'Командир',
    },
];
const ranks = [

    {
        value: 'Лейтенант',
        label: 'Лейтенант',
    },
    {
        value: 'Старший Лейтенант',
        label: 'Старший Лейтенант',
    },
    {
        value: 'Капітан',
        label: 'Капітан',
    },
    {
        value: 'Майор',
        label: 'Майор',
    },
    {
        value: 'Підполковник',
        label: 'Підполковник',
    },
    {
        value: 'Полковник',
        label: 'Полковник',
    },
];
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
            {'Created Jacks /2 ©'}
            <Link color="inherit" href="http://www.viti.edu.ua">
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
        backgroundColor: '#ff5722',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function handleSubmit(event) {
    event.preventDefault();
   // console.log( 'Name:', firstName, 'Password: ', password);

}
export default function SignUp() {
    const classes = useStyles();
    const [rank, setRank] = React.useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [numbervch, setNumbervch] = useState("")
    const [password, setPassword] = useState("")
    const [currency, setCurrency] = React.useState("");




    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };
    const handleChangeRank = (event) => {
        setRank(event.target.value);
    };
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
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Реєстрація
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="first_name"
                                variant="outlined"
                                required
                                fullWidth
                                id="first_name"
                                label="Ім'я"
                                type="text"
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
                                id="last_name"
                                label="Прізвище"
                                name="last_name"
                                autoComplete="last_name"
                                type="text"
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
                                type="text"
                                autoComplete="nvch"
                                value={numbervch}

                                onChange={handleChangeNumbervch}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="role"
                                select
                                label="Роль"
                                value={currency}
                                onChange={handleChangeCurrency}
                                helperText="Будь ласка оберіть свою роль        "
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="role"
                                select
                                label="Звання"
                                value={rank}
                                onChange={handleChangeRank}
                                helperText="Будь ласка оберіть своє звання       "
                            >
                                {ranks.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                        onClick={() => registration(firstName,lastName,numbervch,currency, rank, password)}

                    >
                        Зареєструватися
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>

                            <Link component={RouterLink} to = '/login' variant="body2">
                                Вже маєте аккаунт? Вхід
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
        </ThemeProvider>
    );
}