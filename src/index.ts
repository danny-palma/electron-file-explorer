import app from "./app";
import { resolve } from "path";
import { statSync } from "fs";

new app({
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    },
    darkTheme:false,
    frame: false,
    center: true
}, resolve(__dirname, "../resources/views"));

console.log(statSync(`${__dirname}\\..\\src\\index.ts`).birthtime.toUTCString())
