import { ILastQuoteForCurrencyPair } from "./lastQuoteForCurrencyPair";
import {
  IHistoricForexTicksQuery,
  IHistoricForexTicksFormatted
} from "./historicForexTicks";
import { IForexSnapshotAllTickersResponseFormatted } from "./snapshots";
import {
  IRealTimeConversionQuery,
  IRealTimeConversion
} from "./realTimeCurrencyConversion";
import { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";
export { ILastQuoteForCurrencyPair } from "./lastQuoteForCurrencyPair";
export {
  IHistoricForexTicksQuery,
  IHistoricForexTicksFormatted
} from "./historicForexTicks";
export {
  IRealTimeConversionQuery,
  IRealTimeConversion
} from "./realTimeCurrencyConversion";
export { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";
export { IForexSnapshotAllTickersResponseFormatted } from "./snapshots";
export interface IForexClient {
  lastQuoteForCurrencyPair: (
    from: string,
    to: string
  ) => Promise<ILastQuoteForCurrencyPair>;
  historicTicks: (
    from: string,
    to: string,
    date: string,
    query: IHistoricForexTicksQuery
  ) => Promise<IHistoricForexTicksFormatted>;
  realTimeCurrencyConversion: (
    from: string,
    to: string,
    query: IRealTimeConversionQuery
  ) => Promise<IRealTimeConversion>;
  previousClose: (
    ticker: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  groupedDaily: (
    locale: string,
    market: string,
    date: string,
    query?: IAggregateQuery
  ) => Promise<IAggResponseFormatted>;
  snapshotAllTickers: () => Promise<IForexSnapshotAllTickersResponseFormatted>;
  snapshotGainersLosers: (
    direction?: string
  ) => Promise<IForexSnapshotAllTickersResponseFormatted>;
}
export declare const forexClient: (apiKey: string) => IForexClient;
export default forexClient;