import React from "react";
import "./meeting-room.scss"
import { useState, useEffect } from "react";
// import { config, useClient, useMicrophoneAndCameraTracks, channelName } from "../../config.js";
import MeetingController from "../MeetingControler/MeetingControllers";
import MeetingVideo from "../MeetingVideo/MeetingVideo";
import callApi from "../../api/apiStore/callApi";
import AgoraRTC, { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { useMicrophoneAndCameraTracks } from "../../config";
const MeetingRoom = (props) => {
    const {setInCall, config1, channelName} = props
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const useClient = createClient(config1)
    const client = useClient()
    const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
    const { ready, tracks } = useMicrophoneAndCameraTracks()
    let init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
          await client.subscribe(user, mediaType);
          if (mediaType === "video") {
            setUsers((prevUsers) => {
              return [...prevUsers, user];
            });
          }
          if (mediaType === "audio") {
            user.audioTrack.play();
          }
        });

        client.on("user-unpublished", (user, mediaType) => {
          if (mediaType === "audio") {
            if (user.audioTrack) user.audioTrack.stop();
          }
          if (mediaType === "video") {
            setUsers((prevUsers) => {
              return prevUsers.filter((User) => User.uid !== user.uid);
            });
          }
        });
  
        client.on("user-left", (user) => {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        });
  
        try {
          await client.join(config1.appId, name, config1.token, null);
        } catch (error) {
          console.log("error");
        }
  
        if (tracks) await client.publish([tracks[0], tracks[1]]);
        console.log("console track" + tracks)

        setStart(true);
  }
    useEffect(() => {
      console.log("console refresh")
        if (ready && tracks) {
          console.log("console track" + tracks)
            try {
              //  getAppInfo()
              init(channelName);
            } catch (error) {
              console.log(error);
            }
          }
    }, [channelName, tracks, ready])
    return (
        <section className="meeting-room container">
                {start && tracks &&
                (<MeetingVideo tracks={tracks} users={users}/>)}
            
            <div className="meeting-room__controller">
                {
                  start && ready && tracks && 
                  (<MeetingController client={client} tracks={tracks} setStart={setStart} setInCall={setInCall} />)
                }
            </div>

        </section>
    )
}

export default MeetingRoom