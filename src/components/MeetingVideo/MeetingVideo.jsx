import React from "react";
import "./meeting-video.scss"
import { AgoraVideoPlayer } from "agora-rtc-react";
import { useState, useEffect } from "react";

const MeetingVideo = (props) => {
    const {users, tracks} = props
    const localUser = users.find((user, index) =>index===0 )
    return (
        <div className="meeting-video grid">
            <div className="meeting-video__remote row">
                <div className="video col l-8 m-8 c-11">
                    <AgoraVideoPlayer
                        videoTrack={localUser.videoTrack}
                        key={localUser.uid}
                        style={{ width:'100%', height: "500px" }}
                    />
                </div>
                {
                    users.length > 0 &&
                    localUser.videoTrack ?
                        <div className="video col l-4 m-4 c-11">
                            <AgoraVideoPlayer
                                videoTrack={tracks[1]}
                                style={{ height: "70%", width: "100%" }}
                            />
                        </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default MeetingVideo