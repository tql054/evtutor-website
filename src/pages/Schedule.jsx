import React from "react";
import { useState } from "react";

const Schedules = () => {
    const [inCall, setInCall] = useState(false)
    const channelName = "123-321-2607"
    return(
        <div className="schedule">
            {
                inCall ? (
                    window.location=`http://localhost:3000/meeting/${channelName}`
                ) : (
                    <button onClick={() => setInCall(!inCall)}>Join Call</button>
                )
            }
        </div>
        
    )
}

export default Schedules