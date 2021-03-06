import { ICryptoExchanges } from './cryptoExchanges';
import { ILastTradeForACryptoPair } from './lastTradeForACryptoPair';
import {
  ICryptoSnapshotSingleTickerFormatted,
  ICryptoSnapshotAllTickersFormatted,
  ICryptoSingleTickerFullBookFormatted,
} from './snapshots';
import {
  IHistoricCryptoTradeQuery,
  IHistoricCryptoTradeFormatted,
} from './historicCryptoTrades';
import {
  IAdjustedQuery,
  IAggregateQuery,
  IAggResponseFormatted,
} from '../stocks/aggregates';
import { ICryptoDailyOpenCloseFormatted } from './ICryptoTickJson';
export { ICryptoExchanges } from './cryptoExchanges';
export { ILastTradeForACryptoPair } from './lastTradeForACryptoPair';
export {
  ICryptoSnapshotSingleTickerFormatted,
  ICryptoSnapshotAllTickersFormatted,
  ICryptoSingleTickerFullBookFormatted,
} from './snapshots';
export {
  IAdjustedQuery,
  IAggregateQuery,
  IAggResponseFormatted,
} from '../stocks/aggregates';
export {
  IHistoricCryptoTradeQuery,
  IHistoricCryptoTradeFormatted,
} from './historicCryptoTrades';
export { ICryptoDailyOpenCloseFormatted } from './ICryptoTickJson';
export interface ICryptoClient {
  dailyOpenClose: (
    from: string,
    to: string,
    date: string,
  ) => Promise<ICryptoDailyOpenCloseFormatted>;
  exchanges: () => Promise<ICryptoExchanges[]>;
  lastTradeForPair: (
    from: string,
    to: string,
  ) => Promise<ILastTradeForACryptoPair>;
  historicTrades: (
    from: string,
    to: string,
    date: string,
    query?: IHistoricCryptoTradeQuery,
  ) => Promise<IHistoricCryptoTradeFormatted>;
  snapshotSingleTicker: (
    ticker: string,
  ) => Promise<ICryptoSnapshotSingleTickerFormatted>;
  snapshotAllTickers: () => Promise<ICryptoSnapshotAllTickersFormatted>;
  snapshotGainersLosers: (
    direction?: string,
  ) => Promise<ICryptoSnapshotAllTickersFormatted>;
  snapshotSingleTickerFullBook: (
    ticker: string,
  ) => Promise<ICryptoSingleTickerFullBookFormatted>;
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
export declare const cryptoClient: (apiKey: any) => ICryptoClient;
export default cryptoClient;
