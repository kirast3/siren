import React from 'react';
import './navbar.css'
import logo from '../../assets/img/logo.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth  = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <div className="container">
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="" className="navbar-logo"/>

                    </NavLink>

                </div>
                <div className="navbar-header">
                    <h1>Siren-M</h1>
                </div>
                {!isAuth && <NavLink to="/login"><div className="navbar-login">Войти</div></NavLink>}
                {!isAuth && <NavLink to="/registration"><div className="navbar-registration btn btn-danger">Регистрация</div></NavLink>}
            </div>

        </div>
    );
};

export default Navbar;