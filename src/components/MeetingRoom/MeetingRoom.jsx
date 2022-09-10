import React from "react";
import "./meeting-room.scss"
import { useState, useEffect } from "react";
import { config, useClient, useMicrophoneAndCameraTracks, channelName } from "../../config.js";
import MeetingController from "../MeetingControler/MeetingControllers";
import MeetingVideo from "../MeetingVideo/MeetingVideo";
import callApi from "../../api/apiStore/callApi";
// import Video from "./Video";
// import Controls from "./Controls";
const MeetingRoom = (props) => {
    const {setInCall} = props
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient()
    const { ready, tracks } = useMicrophoneAndCameraTracks()
    const getAppInfo = async () => {
      try {
        const response = await callApi.getAppInfo()
        console.log(`Response: ${response}`)
      } catch (e) {
        alert(`Get app info error: ${e}`)
      }
    }
    const getToken = () => {

    }
    useEffect(() => {
        
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
                await client.join(config.appId, name, config.token, null);
              } catch (error) {
                console.log("error");
              }
        
              if (tracks) await client.publish([tracks[0], tracks[1]]);
              setStart(true);
        }

        if (ready && tracks) {
            try {
              //  getAppInfo()
              init(channelName);
            } catch (error) {
              console.log(error);
            }
          }
    }, [channelName, tracks, ready, client])
    return (
        <section className="meeting-room container">
                {start && tracks &&
                (<MeetingVideo tracks={tracks} users={users}/>)}
            
            <div className="meeting-room__controller">
                <MeetingController/>
            </div>

        </section>
    )
}

export default MeetingRoom