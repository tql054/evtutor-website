import React from "react";
import Logo from "../logo/Logo";
import Personal from "../personal/Personal";
import SearchBar from "../search-bar/SearchBar";
import "./header.scss"
// import { Logo } from "..";

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <SearchBar/>
            <Personal/>
        </header>
    )
}

export default Header