import React from "react";
import "./assignments.scss"

const Assignments = () =>{
    return (
        <div className="assignments">
            <div className="assignments__title">
                <div className="assignments__title__content">
                    Assignments
                </div>

                <a className="assignments__title__link">
                    View all
                </a>
            </div>

            <ul className="assignments__list">
                <li className="assignments__list__item">
                    <div className="inner">
                        <div className="title">
                            Assignments for basic english
                        </div>
                        <div className="time">
                            <i class="fa-solid fa-clock"></i>
                            <h3>19h00 - 20/10/2022</h3>
                        </div>
                        <div className="lesson">
                            EngCon01
                        </div>
                    </div>
                </li>

                <li className="assignments__list__item">
                    <div className="inner">
                        <div className="title">
                            Assignments for basic english
                        </div>
                        <div className="time">
                            <i class="fa-solid fa-clock"></i>
                            <h3>19h00 - 20/10/2022</h3>
                        </div>
                        <div className="lesson">
                            EngCon01
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Assignments