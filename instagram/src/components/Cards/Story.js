import React from 'react'
import "./story.scss";
import ProfileIcon from "../Navigation/ProfileIcon";
import users from "../../data/users";

function Story() {
    let accountName = users[Math.floor(Math.random() * users.length)].username;
    // instagram cuts the name if account name is lengthy.
    if (accountName.length >10)
    {
        accountName = accountName.substring(0, 10) + "...";
    }

    return (
        <div className="story">
            <div>
                <ProfileIcon iconSize="big" storyBorder={true}/>
            </div>
            <span className="accountName">{accountName}</span>
        </div>
    )
}

export default Story
