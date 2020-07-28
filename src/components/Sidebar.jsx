import React from "react";

const Sidebar = () =>
    (
        <aside className="sidebar">
            <nav className="nav">
                <button className="btn-link sidebar-btn">Profile</button>
                <button className="btn-link sidebar-btn">Messages</button>
                <button className="btn-link sidebar-btn">News</button>
                <button className="btn-link sidebar-btn">Music</button>
                <button className="btn-link sidebar-btn sidebar-btn__settings">Settings</button>
            </nav>
        </aside>
    )
export default Sidebar