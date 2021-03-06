import { ICryptoTickJsonFormatted } from './ICryptoTickJson';
export interface ICryptoSnapshotAggFormatted {
  c: number;
  closePrice: number;
  h: number;
  highPrice: number;
  l: number;
  lowPrice: number;
  o: number;
  openPrice: number;
  v: number;
  volume: number;
}
export interface ICryptoSnapshotTickerFormatted {
  ticker: string;
  day: ICryptoSnapshotAggFormatted;
  lastTrade: ICryptoTickJsonFormatted;
  min: ICryptoSnapshotAggFormatted;
  prevDay: ICryptoSnapshotAggFormatted;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface ICryptoSnapshotAllTickersFormatted {
  status: string;
  tickers: ICryptoSnapshotTickerFormatted[];
}
export interface ICryptoSnapshotSingleTickerFormatted {
  status: string;
  ticker: ICryptoSnapshotTickerFormatted;
}
export declare const cryptoSnapshotAllTickers: (
  apiKey: string,
) => Promise<ICryptoSnapshotAllTickersFormatted>;
export declare const cryptoSnapshotSingleTicker: (
  apiKey: string,
  ticker: string,
) => Promise<ICryptoSnapshotSingleTickerFormatted>;
export declare const cryptoSnapshotGainersLosers: (
  apiKey: string,
  direction?: string,
) => Promise<ICryptoSnapshotAllTickersFormatted>;
export interface ICryptoSnapshotBookItemFormatted {
  p: number;
  price: number;
  x: object;
  exchange: object;
}
export interface ICryptoSnapshotTickerBookFormatted {
  ticker: string;
  bids?: ICryptoSnapshotBookItemFormatted[];
  asks?: ICryptoSnapshotBookItemFormatted[];
  bidCount?: number;
  askCount?: number;
  spread?: number;
  updated: number;
}
export interface ICryptoSingleTickerFullBookFormatted {
  status: string;
  data: ICryptoSnapshotTickerBookFormatted;
}
export declare const cryptoSnapshotSingleTickerFullBook: (
  apiKey: string,
  ticker: string,
) => Promise<ICryptoSingleTickerFullBookFormatted>;
