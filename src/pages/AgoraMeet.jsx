import { createClient } from "agora-rtc-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import callApi from "../api/apiStore/callApi";
import MeetingRoom from "../components/MeetingRoom/MeetingRoom";
const AgoraMeet = (inCall) => {
  let { channelName } = useParams()
  const [config, setConfig] = useState()
  const getAppInfo = async () => {
    try {
      const appInfo = await callApi.getAppInfo()
      let appId = appInfo[0].appID
      let appCerti = appInfo[0].appCertificate
      const response = await callApi.getToken(appId, appCerti, channelName)
      setConfig({ mode: "rtc", codec: "vp8", appId:appId, token: response.token })
      console.log(config)
    } catch (e) {
      alert(`Get app info error: ${e}`)
    }
  }

  // const getToken = async () => {
  //   try {
  //     console.log("appid " +appInfo.appId)
  //     // const response = await callApi.getToken()
  //     // setAppInfo(response)
  //   } catch (e) {
  //     alert(`Get app info error: ${e}`)
  //   }
  // }

  useEffect(() => {
    getAppInfo()
  }, [])
  return (


        <div style={{ height: "100%",  backgroundColor: "#01122e"}}>
          { 
            config?(
              <MeetingRoom setInCall={inCall} config1={config} channelName={channelName}/>
              // <h1 style={{color:"#fff"}}>Loading...</h1>

            ):(
              <h1 style={{color:"#fff"}}>Loading...</h1>
            )
          }
          
        </div>
  )
}

export default AgoraMeet