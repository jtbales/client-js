export interface ICryptoExchanges {
  id: number;
  type: string;
  market: string;
  name: string;
  url: string;
}
export declare const cryptoExchanges: (
  apiKey: string,
) => Promise<ICryptoExchanges[]>;
