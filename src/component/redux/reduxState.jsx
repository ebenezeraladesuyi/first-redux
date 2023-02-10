// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     current: null,
// }

// const ReduxState = createSlice({
//     // name - a key to get your redux state.. to find easily
//     name: "User",
//     // what goes on in our state
//     initialState,
//     reducers: {
//         loginUser : (state, actions) => {
//             state.current = actions.payload
//         },

//         logOutUser: (state) => {
//             state.current = null;
//         }
//     }
// })

// export const { loginUser, logOutUser } = ReduxState.actions

// export default ReduxState.reducer


import { createSlice } from "@reduxjs/toolkit";


const initials = {
    current = null,
}


const Reduxstate = createSlice({
    name: "user",
    initials,
    reducers: {
        login: (state, action) => {
            state.current = action.payload
        }
    }
})

export const { login } = Reduxstate.action

export default Reduxstate.reducer
