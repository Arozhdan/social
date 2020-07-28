import React from "react";
import PostItem from "./PostItem";


const ProfilePosts = () => (
    <div className="profile-posts">
        <h3 className="account-page-title">My posts</h3>
        <div className="account-page-add">
            <textarea className="account-page-new-post" placeholder="Type your post here..."/>
            <button className="btn-main account-page-new-btn">Add post</button>
        </div>
        <div className="posts-wrapper">
           <PostItem message='Hello! Welcome here again!' liked={true}/>
           <PostItem/>
           <PostItem message='Arozhdan Baibussynov, Nice to see you here. Hope to meet you this weekend somewhere!)' liked={true}/>
           <PostItem/>
        </div>
    </div>
)
export default ProfilePosts