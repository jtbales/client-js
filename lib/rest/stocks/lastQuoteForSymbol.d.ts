export interface ILastQuote {
  askprice: number;
  asksize: number;
  askexchange: number;
  bidprice: number;
  bidsize: number;
  bidexchange: number;
  timestamp: number;
}
export interface ILastQuoteResult {
  status: string;
  symbol: string;
  last: ILastQuote;
}
export declare const lastQuoteForSymbol: (
  apiKey: string,
  symbol: string,
) => Promise<ILastQuoteResult>;
