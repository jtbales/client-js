import { ICryptoClient } from './crypto';
import { IForexClient } from './forex';
import { IReferenceClient } from './reference';
import { IStocksClient } from './stocks';
export * from './crypto';
export * from './forex';
export * from './reference';
export * from './stocks';
export interface IRestClient {
  crypto: ICryptoClient;
  forex: IForexClient;
  stocks: IStocksClient;
  reference: IReferenceClient;
}
export declare const restClient: (apiKey: any) => IRestClient;
export default restClient;
