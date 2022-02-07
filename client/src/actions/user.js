import axios from 'axios'
import {setUser} from "../reducers/userReducer";
//import {API_URL} from "../config";

export const registration = async (firstname,lastname,vch, typeUser,rank,password) => {
    try {

        const response = await axios.post(`http://localhost:5000/auth/registration`, {
            firstname,
            lastname,
            vch,
            typeUser,
            rank,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (firstname,lastname,vch,password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/auth/login`, {
                firstname,
                lastname,
                vch,
                password
            })
            dispatch(setUser(response.data))
            // let role = (response.data.token).substr( response.data.token.length-3)
            // let token = (response.data.token).substr(0,response.data.token.length-3 )

            localStorage.setItem('token',  response.data.token)
            console.log(response.data.token)
        } catch (e) {
            console.log(e)
            alert(e.response.data.message)
        }
    }
}

// export const auth =  () => {
//     return async dispatch =>  {
//         try {
//             const response = await axios.get(`http://localhost:5000/auth/registration`,
//                 {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
//             )
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e) {
//             localStorage.removeItem('token')
//         }
//     }
// }

