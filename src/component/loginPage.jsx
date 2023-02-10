import React from "react";
import { useDispatch } from "react-redux";
import { loginUser, logOutUser } from "./redux/reduxState";


const Login = () => {

    const dispatch = useDispatch()

    return (
        <> 

            <div>
                <button onClick={()=> {
                    dispatch(loginUser({
                        Name: "Josh",
                        Age: 20,
                        Email: "josh@test.com",
                        Stack: "MERN",
                    }),
                    )
                }}>Log in</button>

                <button onClick={() => {
                    dispatch(logOutUser());
                }}>Log out</button>
            </div>


        </>
    )
}

export default Login;