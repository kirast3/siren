import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
// import {login} from "../../actions/user";

const Login = () => {
    const [email, setEmail, ] = useState("")
    const [vch, setvch, ] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className='authorization'>
                <div className="authorization-header">Авторизація</div>
                <Input value={email} setValue={setEmail} type="text" placeholder="Призвище та ім'я "/>
                <Input value={vch} setValue={setvch} type="text" placeholder="Номер військової частини"/>
                <Input value={password} setValue={setPassword} type="password" placeholder="Пароль"/>
                <button className="authorization-btn" >Войти</button>
            </div>
        </div>

    );
};

export default Login;