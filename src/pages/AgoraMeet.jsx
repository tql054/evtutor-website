import React from "react";
import { useState } from "react";
import MeetingRoom from "../components/MeetingRoom/MeetingRoom";

const AgoraMeet = () => {
    const [inCall, setInCall] = useState(false)
    return (
      <div style={{ height: "800px",  backgroundColor: "#01122e"}}>
        {inCall ? (
            <MeetingRoom setInCall={setInCall}/>
          ) : (
          <button 
            style={{width:"200px", height:"20px"}}
            onClick={() => setInCall(true)}
          >
            Join Call
          </button>
          )}
      </div>
    )
}

export default AgoraMeet