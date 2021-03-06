export * from './rest';
export * from './websockets';
import { IRestClient } from './rest';
import { IWebsocketClient } from './websockets';
export interface IPolygonClient {
  rest: IRestClient;
  websockets: IWebsocketClient;
}
export declare const polygonClient: (apiKey: string) => IPolygonClient;
export default polygonClient;
