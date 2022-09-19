import React from "react";
import "./personal.scss"

const Personal = () => {
    return (
        <div className="personal-container">
            <div className="bell">
                <i class="fa-regular fa-bell"></i>  
            </div>
            <div className="header-personal">
                <div className="header-personal__image"></div>
                <div className="header-personal__name">
                    Quoc Tuan
                </div>
                <div className="header-personal__down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Personal