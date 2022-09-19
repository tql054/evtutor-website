import React from "react";
import "./button.scss"
export default function CallButton(props) {
    const {onClick, bgColor, color, icon, active} = props
    return (
        <>
            {
                active?(
                    <div className="call-button active-button" onClick={onClick}>
                        {icon}
                    </div>
                ): (
                    <div className="call-button" onClick={onClick}>
                        {icon}
                    </div>
                )
            }
        </>
        
    )
}

