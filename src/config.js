import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "c7532cf603f1431b9201c6c9699a1515";
const token =
  "006c7532cf603f1431b9201c6c9699a1515IACAhaN8w1hwCsxwnJNed8jItIUkQZs6mSPp0wdqupSR0WTNKL8AAAAAIgAwjAYl2XMdYwQAAQBpMBxjAgBpMBxjAwBpMBxjBABpMBxj";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
