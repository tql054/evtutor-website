import React from "react";
import "./nav-item.scss";

const NavItem = (props) => {
    const {icon, active, onClick} = props
    return (
        active ? (
            <div className="nav-item active" onClick={onClick}>
                {icon}
            </div>
        ):(
            <div className="nav-item" onClick={onClick}>
                {icon}
            </div>
        )
    )
}

export default NavItem