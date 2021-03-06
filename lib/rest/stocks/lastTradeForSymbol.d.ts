export interface ILastTrade {
  price: number;
  size: number;
  exchange: number;
  cond1: number;
  cond2: number;
  cond3: number;
  cond4: number;
  timestamp: number;
}
export interface ILastTradeResult {
  status: string;
  symbol: string;
  last: ILastTrade;
}
export declare const lastTradeForSymbol: (
  apiKey: string,
  symbol: string,
) => Promise<ILastTradeResult>;
