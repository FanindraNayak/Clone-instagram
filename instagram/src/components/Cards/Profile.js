import React from 'react'
import "./profile.scss";
import ProfileIcon from "../Navigation/ProfileIcon";
import users from "../../data/users";

function Profile(props) {

    const{
        userName,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
    } = props;

    let accountName = userName? userName : users[Math.floor(Math.random() * users.length)].username;

    return (
        <div className="profile">
            <ProfileIcon
                iconSize={iconSize}
                storyBorder={storyBorder}
            />
             {(accountName || caption) && !hideAccountName && (
                <div className="textContainer">
                <span className="accountName">{accountName}</span>
                <span className={`caption ${captionSize}`}>{caption}</span>
                </div>
             )}
             <a href="/">{urlText}</a>
        </div>
    )
}

export default Profile
