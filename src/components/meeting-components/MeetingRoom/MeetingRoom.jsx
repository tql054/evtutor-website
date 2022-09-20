import React from "react";
import "./meeting-room.scss"
import { useState, useEffect } from "react";
import MeetingController from "../MeetingControler/MeetingControllers";
import MeetingVideo from "../MeetingVideo/MeetingVideo";
import AgoraRTC, { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const MeetingRoom = (props) => {
    const {setInCall, config, channelName} = props
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const useClient = createClient(config)
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
            user.audioTrack.play("agora_remote", {fit: 'contain'});
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
          await client.join(config.appId, name, config.token, null);
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
              init(channelName);
            } catch (error) {
              console.log(error);
            }
          }
    }, [channelName, tracks, ready])
    return (

      start && ready && tracks ?
        <section className="meeting-room container">
                (<MeetingVideo tracks={tracks} users={users}/>)
            
            <div className="meeting-room__controller">
                {
                  (<MeetingController channelName={channelName} client={client} tracks={tracks} setStart={setStart} setInCall={setInCall} />)
                }
            </div>

        </section> : <h1 style={{color:"#fff", height:"730px", textAlign:"center", lineHeight:"730px"}}>Loading...</h1>
    )
}

export default MeetingRoom