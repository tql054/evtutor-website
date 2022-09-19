import React from "react"
import "./schedule.scss"
import { useState } from "react"
import { ImageSchedule } from "./image"
import Calendar from "../calendar/Calendar"
import Assignments from "../assignments/Assignments"


const Schedule = () => {
    const [inCall, setInCall] = useState(false)
    const channelName = "123-321-2607"
    return(
        <div className="schedule-container grid">
            <div className="row">
                <div className="col l-8 m-8">
                    <div className="schedule">
                        <div className="schedule__dashboard">
                            <div className="schedule__dashboard__text">
                                <div className="title">
                                    Chào Quốc Tuấn!
                                </div>
                                <div className="content">
                                    Cùng xem hôm nay bạn có gì mới nào!
                                </div>
                            </div>

                            <div className="schedule__dashboard__image">
                                <img src={ImageSchedule} alt="" />
                            </div>
                        </div>

                        <div className="schedule__time-line">
                            <h3 className="schedule__time-line__title">
                                Timeline
                            </h3>
                            
                            <div className="schedule__time-line__controllers">
                                <div className="button left">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="button right">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <Calendar/>
                    </div>
                </div>

                <div className="assignment col l-4 m-4">
                    <Assignments/>
                </div>
            </div>
        </div>
    )
}

export default Schedule