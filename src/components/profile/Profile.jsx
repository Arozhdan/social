import React from "react";
import ProfilePosts from "../ProfilePosts";
import ProfileData from "../ProfileData";

const Profile = () => (
    <div className="account-page">
        <div className="account-page-bg-wrapper">
            <img src="https://cdn.pixabay.com/photo/2016/08/05/17/56/autumn-1572822_960_720.png" alt=""
                 className="account-page-bg"/>
            <div className="account-page-img-wrapper"><img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"
                className="account-page-img"/></div>
        </div>
        <ProfileData/>
        <ProfilePosts/>
    </div>
)
export default Profile