export interface ILastQuoteForex {
  ask: number;
  bid: number;
  exchange: number;
  timestamp: number;
}
export interface ILastQuoteForCurrencyPair {
  symbol: string;
  status: string;
  last: ILastQuoteForex;
}
export declare const lastQuoteForCurrencyPair: (
  apiKey: string,
  from: string,
  to: string,
) => Promise<ILastQuoteForCurrencyPair>;
