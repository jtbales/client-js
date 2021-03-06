export interface IMarket {
  market: string;
  desc: string;
}
export interface IMarketResponse {
  status?: string;
  results?: IMarket[];
}
export declare const markets: (apiKey: string) => Promise<IMarketResponse>;
