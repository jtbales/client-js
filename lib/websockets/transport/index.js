"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_1 = require("websocket");
exports.getWsClient = (url, apiKey) => {
    if (!apiKey) {
        throw new Error("api key not provided.");
    }
    const ws = new websocket_1.w3cwebsocket(url);
    ws.onopen = () => {
        ws.send(JSON.stringify({ action: "auth", params: apiKey }));
    };
    return ws;
};
