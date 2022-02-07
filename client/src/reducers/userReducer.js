const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT'

const defaultState = {
    currentUser:{},
    isAuth: false
}

export default function userReducer (state=defaultState, action) {
    switch (action.type){
        case SET_USER:
            let role = false
            if(localStorage.getItem('token')!==undefined){
                role=localStorage.getItem('token').substr(localStorage.getItem('token').length-3)
            }
            return {

                ...state,
                currentUser: action.payload.user,
                role: role /*(((localStorage.getItem('token')).substr(localStorage.getItem('token').length-3 )):  ? false )*/  ,
                isAuth: true,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }


        default:
            return state
    }
}

export const setUser =user =>({
    type:SET_USER,
    payload: user,
})

export  const logout =()=>({type:LOGOUT})