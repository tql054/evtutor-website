import React from "react";
import "./meeting-video.scss"
import { AgoraVideoPlayer } from "agora-rtc-react";
import { useState, useEffect } from "react";

const MeetingVideo = (props) => {
    const {users, tracks} = props
    let localUser = users.find((user, index) =>index===0 )
    useEffect(() => {
        localUser = users.find((user, index) =>index===0 )
    }, [users, tracks])
    return (
        <div className="meeting-video grid">
            <div className="meeting-video__remote row">

                {
                    (localUser && localUser.videoTrack) ?
                        <div className="video-remote col l-8 m-8 c-11">
                            <AgoraVideoPlayer
                                videoTrack={localUser.videoTrack}
                                key={localUser.uid}
                                style={{ width:'100%', height: "100%" }}
                            />
                        </div>
                    : <div className="video-remote col l-8 m-8 c-11"></div>
                }

                <div className="video-local col l-4 m-4 c-11">
                    <div className="video-local__stream">
                    {
                        tracks[1]? 
                        <AgoraVideoPlayer
                            videoTrack={tracks[1]}
                            style={{ height: "100%", width: "100%" }}
                        />:<></>
                    }   
                    </div>

                    <div className="video-local__remote">
                        <div className="container grid" style={{height:"100%"}}>
                            <div className="row" style={{height:"100%"}}>
                                {
                                    users.map((user, index) => {
                                        if(index!=0)
                                            return (
                                                index!= 0 && user && user.videoTrack &&
                                                <div key={index} className="col l-4 m-4 remote-list">
                                                    <AgoraVideoPlayer
                                                        videoTrack={user.videoTrack}
                                                        style={{ height: "100%", width: "100%" }}
                                                    />
                                                </div>
                                            )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MeetingVideo 