import * as WebSocket from 'ws';
export * from './forex';
export * from './stocks';
export * from './crypto';
export interface IWebsocketClient {
  crypto: () => WebSocket;
  forex: () => WebSocket;
  stocks: () => WebSocket;
}
export declare const websocketClient: (apiKey: string) => IWebsocketClient;
export default websocketClient;
