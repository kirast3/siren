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
            console.log(firstname)
            const response = await axios.post(`http://localhost:5000/auth/login`, {
                firstname,
                lastname,
                vch,
                password
            })
            console.log(response.data)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('token', response.data.token)
        } catch (e) {
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

