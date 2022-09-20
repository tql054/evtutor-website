import { createClient } from "agora-rtc-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import callApi from "../api/apiStore/callApi";
import MeetingRoom from "../components/meeting-components/MeetingRoom/MeetingRoom";
const AgoraMeet = (inCall) => {
  let { channelName } = useParams()
  const [config, setConfig] = useState()
  const getAppInfo = async () => {
    try {
      const appInfo = await callApi.getAppInfo()
      let appId = appInfo.appID
      let appCerti = appInfo.appCertificate
      const response = await callApi.getToken(appId, appCerti, channelName)
      setConfig({ mode: "rtc", codec: "vp8", appId:appId, token: response.token })
      
    } catch (e) {
      alert(`Get app info error: ${e}`)
    }
  }

  useEffect(() => {
    getAppInfo()
  }, [])
  return (


        <div style={{ height: "100%",  backgroundColor: "#01122e"}}>
          { 
            config?(
              <MeetingRoom setInCall={inCall} config={config} channelName={channelName}/>

            ):(
              <h1 style={{color:"#fff", height:"730px", textAlign:"center", lineHeight:"730px"}}>Loading...</h1>
            )
          }
          
        </div>
  )
}

export default AgoraMeet