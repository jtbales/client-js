export interface ITickerTypes {
  status?: string;
  results?: any;
}
export declare const tickerTypes: (apiKeys: string) => Promise<ITickerTypes>;
