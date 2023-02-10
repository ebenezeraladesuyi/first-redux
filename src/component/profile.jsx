import React from "react";
import { useSelector } from "react-redux";


const Profile = () => {

    const userProfile = useSelector((state) => state.myReducer.current)

    return (
        <>

            <h2>User</h2>

            <div>Username: {userProfile?.Name} </div>
            <div>Age: {userProfile?.Age} </div>
            <div>Email: {userProfile?.Email} </div>
            <div>Stack: {userProfile?.Stack} </div>

        </>
    )
}

export default Profile;