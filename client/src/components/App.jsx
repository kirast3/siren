import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import Test from "./test/Test";
import Login from "./authorization/Login";
import Registration from "./authorization/Registration";

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const role = useSelector(state => state.user.role);
    console.log(isAuth);
    console.log(role);


    return (


        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Switch>
                            <Route path='/login' component={Login}/>
                            <Route path='/registration' component={Registration}/>
                            <Route path='/' component={Main}/>
                            {role === "VRI" ?
                                <Switch>
                                    {/*TODO Тут выпускник*/}
                                    <Route path='/test' component={Test}/>

                                </Switch>
                                :
                                role==="WMO" ?
                                    <Switch>
                                        {/*TODO Тут Командир*/}
                                    </Switch>
                                    :
                                    role==="" ?
                                        <Switch>
                                            {/*TODO Тут Институт*/}
                                        </Switch>
                                        :
                                        role==="" ?
                                            <Switch>
                                                {/*TODO Тут Институт*/}
                                            </Switch>
                                            :
                                            <Switch>
                                                <Route path='/' component={Main}/>
                                            </Switch>
                            }

                            }

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