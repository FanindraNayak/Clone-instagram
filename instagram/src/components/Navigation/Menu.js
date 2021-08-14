import React from 'react'
import "./menu.scss";
import {ReactComponent as Home} from "../../images/home.svg";
import {ReactComponent as Explore} from "../../images/explore.svg";
import {ReactComponent as Inbox} from "../../images/inbox.svg";
import {ReactComponent as Notification} from "../../images/notification.svg";
import ProfileIcon from "./ProfileIcon"

function Menu() {
    return (
        <div className="menu">
            <Home className="icon" />
            <Explore className="icon" />
            <Inbox className="icon" />
            <Notification className="icon" />
            <ProfileIcon iconSize="small" />
        </div>
    )
}

export default Menu
