import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {
  getMessage: () => {
    console.log("api ::: getMessage");
    console.log(" - __dirname: ", __dirname);
    console.log(" - __filename: ", __filename);
    return "Hello World!";
  }
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
console.log("preload process.contextIsolated: ", process.contextIsolated);

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
