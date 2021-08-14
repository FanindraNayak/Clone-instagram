import React from 'react'
import "./sidebar.scss";
import Sticky from 'react-sticky-el';
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer"

function Sidebar() {
    return (
        <div>
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile userName="Himadri.fgsd" caption="Alexdaeasa csdfvdsv" urlText="Switch" iconSize="big"/>
                    <Suggestions />
                    <Footer/>
                </div>
            </Sticky>
        </div>
    )
}

export default Sidebar
