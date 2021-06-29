import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import Login from "./authorization/Login";
import Registration from "./authorization/Registration";

const App = () => {
    const  isAuth = useSelector(state => state.user.isAuth);

    return (


        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/registration' component={Registration} />
                            <Route path='/' component={Main} />

                            {/*<Redirect to="login"/>*/}
                        </Switch>
                        :
                        <Switch>
                            <Redirect to="/"/>
                        </Switch>
                    }
                </div>

            </div>

        </BrowserRouter>

    );
};

export default App;