import axiosClient from "../axiosClient";

const callApi = {
    getAppInfo: () => {
        const url = `api/agoraApp`
        return axiosClient.get(url, {})
    },

    getToken: (appId, appCertificate, channelName) => {
        const url = `api/generateToken/appID=${appId}&appCertificate=${appCertificate}&channelName=${channelName}`
        return axiosClient.get(url, {})
    }
}

export default callApi;