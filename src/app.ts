import { App, BrowserWindowConstructorOptions, BrowserWindow, app } from "electron";

export default class Application {
    public window?: BrowserWindow;
    public app: App = app;
    constructor(options: BrowserWindowConstructorOptions, url: string) {
        const initWindow = () => {
            this.window = new BrowserWindow(options);
            this.window?.loadURL(url);
        };
        if (this.app.isReady()) {
            initWindow();
        } else {
            this.app.on("ready", initWindow);
        };
        this.listeners()
    }
    private listeners() {
        this.app.on("window-all-closed", () => {
            console.log("goodbye :D");
            this.app.quit();
        });
    }
};
