import React, { useState } from "react";
import CallButton from "../../Buttons/Buttons";
import "./meeting-controllers.scss"
import { CamOn, CamOff, MicOn, MicOff } from "./icons";

const MeetingController = (props) => {
    const { tracks, channelName, client, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({ video: true, audio: true });
    const date = new Date()
    const mute = async (type) => {
        if (type === "audio") {
        await tracks[0].setEnabled(!trackState.audio);
        setTrackState((ps) => {
            return { ...ps, audio: !ps.audio };
        });
        } else if (type === "video") {
        await tracks[1].setEnabled(!trackState.video);
        setTrackState((ps) => {
            return { ...ps, video: !ps.video };
        });
        }
    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
      };
    
    return (
        
        <div className="meeting-controllers">
            <div className="meeting-controllers__time">
                <h1>{`${date.getHours()}:${date.getMinutes()}`} | {channelName}</h1>
            </div>
            <ul className="meeting-controllers__buttons">
                <li onClick={() => {mute("audio")}}>
                    {   
                        trackState.audio ? 
                            <CallButton icon={<img src={MicOn} alt="" />}/>
                        : 
                            <CallButton icon={<img src={MicOff}  alt="" />}  active={true}/>
                    }
                </li>

                <li onClick={() => {mute("video")}}>
                    {
                        trackState.video ? 
                            <CallButton icon={<img src={CamOn} alt="" />}/>
                        : 
                            <CallButton icon={<img src={CamOff} alt="" />} active={true}/>
                        
                    }
                    
                </li>

                <li>
                    <CallButton icon={<i class="fa-solid fa-desktop"></i>} onClick={leaveChannel}/>
                </li>

                <li>
                    <CallButton icon={<i class="fa-solid fa-phone"></i>} onClick={() => {console.log("button: phone")}} active={true}/>
                </li>
            </ul>

            <div className="meeting-controllers__advance">
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-bolt"></i>
            </div>
        </div>
    )
}

export default MeetingController