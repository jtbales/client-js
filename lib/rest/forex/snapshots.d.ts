import { IV1ForexRaw } from './historicForexTicks';
export interface IForexSnapshotAggRaw {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}
export interface IForexSnapshotAggFormatted {
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
export interface IForexSnapshotTickerRaw {
  ticker: string;
  day: IForexSnapshotAggRaw;
  lastTrade: IV1ForexRaw;
  min: IForexSnapshotAggRaw;
  prevDay: IForexSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface IForexSnapshotTickerFormatted {
  ticker: string;
  day: IForexSnapshotAggRaw;
  lastTrade: IV1ForexRaw;
  min: IForexSnapshotAggRaw;
  prevDay: IForexSnapshotAggRaw;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}
export interface IForexSnapshotAllTickersResponseRaw {
  status: string;
  tickers: IForexSnapshotTickerRaw[];
}
export interface IForexSnapshotAllTickersResponseFormatted {
  status: string;
  tickers: IForexSnapshotTickerFormatted[];
}
export declare const forexSnapshotAllTickers: (
  apiKey: string,
) => Promise<IForexSnapshotAllTickersResponseFormatted>;
export declare const forexSnapshotGainersLosers: (
  apiKey: string,
  direction?: string,
) => Promise<IForexSnapshotAllTickersResponseFormatted>;
