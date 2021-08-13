import "./navigation.css"
import logo from "./InstagramLogo.png"
import Menu from "./Menu"
import React from 'react'
import { IconButton  } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src ={logo} alt="instagram logo"/>
                <div className="search">
                    <span className="searchText">Search</span>
                    <IconButton aria-label="Search database" icon={<SearchIcon />} />
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation;