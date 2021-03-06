export declare type MarketStatus = 'open' | 'closed';
export declare type MarketStatusExtended = 'open' | 'closed' | 'extended-hours';
export interface IMarketStatus {
  market: MarketStatusExtended;
  serverTime: string;
  exchanges: {
    nyse: MarketStatusExtended;
    nasdaq: MarketStatusExtended;
    otc: MarketStatusExtended;
  };
  currencies?: {
    fx: MarketStatus;
    crypto: MarketStatus;
  };
}
export declare const marketStatus: (apiKey: string) => Promise<IMarketStatus>;
