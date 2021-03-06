import { ITradeV1Raw, ITradeV1Formatted } from './v1HistoricTrades';
export interface IStocksSnapshotAggRaw {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface IStocksSnapshotAggFormatted {
  c: number;
  close: number;
  h: number;
  high: number;
  l: number;
  low: number;
  o: number;
  open: number;
  v: number;
  volume: number;
}
export declare const formatIStocksSnapshotAggRaw: (
  raw: IStocksSnapshotAggRaw,
) => IStocksSnapshotAggFormatted;
export interface IStocksSnapshotQuoteRaw {
  p: number;
  s: number;
  P: number;
  S: number;
  t: number;
}
export interface IStocksSnapshotQuoteFormatted {
  p: number;
  bidPrice: number;
  s: number;
  bidSize: number;
  P: number;
  askPrice: number;
  S: number;
  askSize: number;
  t: number;
  lastUpdateTimestamp: number;
}
export declare const formatIStocksSnapshotQuoteRaw: (
  raw: IStocksSnapshotQuoteRaw,
) => IStocksSnapshotQuoteFormatted;
export interface IStocksSnapshotTickerRaw {
  ticker: string;
  day: IStocksSnapshotAggRaw;
  lastTrade: ITradeV1Raw;
  lastQuote: IStocksSnapshotQuoteRaw;
  min: IStocksSnapshotAggRaw;
  prevDay: IStocksSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface IStocksSnapshotTickerFormatted {
  ticker: string;
  day: IStocksSnapshotAggFormatted;
  lastTrade: ITradeV1Formatted;
  lastQuote: IStocksSnapshotQuoteFormatted;
  min: IStocksSnapshotAggFormatted;
  prevDay: IStocksSnapshotAggFormatted;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export declare const formatIStocksSnapshotTickerRaw: (
  raw: IStocksSnapshotTickerRaw,
) => IStocksSnapshotTickerFormatted;
export interface ISnapshotAllTickersResultRaw {
  status: string;
  tickers: IStocksSnapshotTickerRaw[];
}
export interface ISnapshotAllTickersResultFormatted {
  status: string;
  tickers: IStocksSnapshotTickerFormatted[];
}
export declare const snapshotAllTickers: (
  apiKey: string,
) => Promise<ISnapshotAllTickersResultFormatted>;
export interface ISnapshotSingleTickerResultRaw {
  status: string;
  ticker: IStocksSnapshotTickerRaw;
}
export interface ISnapshotSingleTickerResultFormatted {
  status: string;
  ticker: IStocksSnapshotTickerFormatted;
}
export declare const snapshotSingleTicker: (
  apiKey: string,
  ticker: string,
) => Promise<ISnapshotSingleTickerResultFormatted>;
export interface ISnapshotGainersLosersResultRaw {
  status: string;
  tickers: IStocksSnapshotTickerRaw[];
}
export interface ISnapshotGainersLosersResultFormatted {
  status: string;
  tickers: IStocksSnapshotTickerFormatted[];
}
export declare const snapshotGainersLosers: (
  apiKey: string,
  direction?: string,
) => Promise<ISnapshotGainersLosersResultFormatted>;
