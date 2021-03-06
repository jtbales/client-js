import {
  IAdjustedQuery,
  IAggregateQuery,
  IAggResponseFormatted,
} from './aggregates';
import { IConditionMappings } from './conditionMappings';
import { IDailyOpenClose } from './dailyOpenClose';
import { IExchangeFormatted } from './exchanges';
import { ILastQuoteResult } from './lastQuoteForSymbol';
import { ILastTradeResult } from './lastTradeForSymbol';
import {
  ISnapshotAllTickersResultFormatted,
  ISnapshotGainersLosersResultFormatted,
  ISnapshotSingleTickerResultFormatted,
} from './snapshots';
import {
  IV1HistoricQuotesQuery,
  IV1HistoricQuotesResultFormatted,
} from './v1HistoricQuotes';
import {
  IV1HistoricTradesQuery,
  IV1HistoricTradesResultFormatted,
} from './v1HistoricTrades';
import {
  IV2HistoricQuotesQuery,
  IV2HistoricQuotesResultFormatted,
} from './v2HistoricQuotes';
import {
  IV2HistoricTradesQuery,
  IV2HistoricTradesResultFormatted,
} from './v2HistoricTrades';
export {
  IAdjustedQuery,
  IAggregateQuery,
  IAggResponseFormatted,
} from './aggregates';
export { IConditionMappings } from './conditionMappings';
export { IDailyOpenClose } from './dailyOpenClose';
export { IExchangeFormatted } from './exchanges';
export { ILastQuoteResult } from './lastQuoteForSymbol';
export { ILastTradeResult } from './lastTradeForSymbol';
export {
  ISnapshotAllTickersResultFormatted,
  ISnapshotGainersLosersResultFormatted,
  ISnapshotSingleTickerResultFormatted,
} from './snapshots';
export {
  IV1HistoricQuotesQuery,
  IV1HistoricQuotesResultFormatted,
} from './v1HistoricQuotes';
export {
  IV1HistoricTradesQuery,
  IV1HistoricTradesResultFormatted,
} from './v1HistoricTrades';
export {
  IV2HistoricQuotesQuery,
  IV2HistoricQuotesResultFormatted,
} from './v2HistoricQuotes';
export {
  IV2HistoricTradesQuery,
  IV2HistoricTradesResultFormatted,
} from './v2HistoricTrades';
export interface IStocksClient {
  conditionMappings: (ticktype?: string) => Promise<IConditionMappings>;
  dailyOpenClose: (symbol: string, date: string) => Promise<IDailyOpenClose>;
  exchanges: () => Promise<IExchangeFormatted[]>;
  lastQuoteForSymbol: (symbol: string) => Promise<ILastQuoteResult>;
  lastTradeForSymbol: (symbol: string) => Promise<ILastTradeResult>;
  v1HistoricQuotes: (
    symbol: string,
    date: string,
    query?: IV1HistoricQuotesQuery,
  ) => Promise<IV1HistoricQuotesResultFormatted>;
  v1HistoricTrades: (
    symbol: string,
    date: string,
    query?: IV1HistoricTradesQuery,
  ) => Promise<IV1HistoricTradesResultFormatted>;
  v2HistoricQuotes: (
    symbol: string,
    date: string,
    query?: IV2HistoricQuotesQuery,
  ) => Promise<IV2HistoricQuotesResultFormatted>;
  v2HistoricTrades: (
    symbol: string,
    date: string,
    query?: IV2HistoricTradesQuery,
  ) => Promise<IV2HistoricTradesResultFormatted>;
  snapshotAllTickers: () => Promise<ISnapshotAllTickersResultFormatted>;
  snapshotSingleTicker: (
    ticker: string,
  ) => Promise<ISnapshotSingleTickerResultFormatted>;
  snapshotGainersLosers: (
    direction?: string,
  ) => Promise<ISnapshotGainersLosersResultFormatted>;
  previousClose: (
    ticker: string,
    query?: IAdjustedQuery,
  ) => Promise<IAggResponseFormatted>;
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string,
    to: string,
    query?: IAggregateQuery,
  ) => Promise<IAggResponseFormatted>;
  groupedDaily: (
    locale: string,
    market: string,
    date: string,
    query?: IAdjustedQuery,
  ) => Promise<IAggResponseFormatted>;
}
export declare const stocksClient: (apiKey: string) => IStocksClient;
export default stocksClient;
