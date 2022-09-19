import React from "react";
import { Link } from "react-router-dom";
import "./calendar.scss"
const Calendar = () => {
    const channelName = "123-321-2607"
    return (
        <div className="calendar">
            {/* <div className="calendar__date">

            </div>

            <div className="calendar__grid">
                
                <div className="calendar__grid__item">
                    <div className="time">
                        <div className="time__start">
                            9:00 AM
                        </div>

                        <div className="time__end">
                            11:00 AM
                        </div>
                    </div>
                    <Link to={`/meeting/${channelName}`} target="_blank">
                        <div className="lesson">
                            <div className="lesson__title">
                                {channelName}
                            </div>
                        </div>
                    </Link>
                    
                </div>
            </div> */}

            <div class="schedule__container">
                <div class="days__container">
                    <span class="corner"></span>
                    <div class="day">Thứ hai</div>
                    <div class="day">Thứ ba</div>
                    <div class="day">Thứ tư</div>
                    <div class="day">Thứ năm</div>
                    <div class="day">Thứ sáu</div>
                    <div class="day">Thứ bảy</div>
                    <div class="day">Chủ nhật</div>
                </div>
                <div class="part__day">
                    {/* <span class="time">9:00 <br/> - <br/> 11:00</span> */}
                    <Link to={`/meeting/${channelName}`} target="_blank">
                        <div className="task">
                                {channelName}
                        </div>
                    </Link>

                    
                </div>
                
            </div>
        </div>
    )
}

export default Calendar