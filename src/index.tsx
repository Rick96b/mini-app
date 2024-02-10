import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "app";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";

// Init VK  Mini App
bridge.send("VKWebAppInit").catch(err => console.log(err));

ReactDOM.render(
  <ConfigProvider
    appearance="light"
  >
    <AdaptivityProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
,
document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  import("./erudaConf").then(({ default: eruda }) => {}); //runtime download
}
