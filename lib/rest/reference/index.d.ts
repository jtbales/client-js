import { ILocalesResponse } from './locales';
import { IMarketHolyday } from './marketHolidays';
import { IMarketResponse } from './markets';
import { IMarketStatus } from './marketStatus';
import { IStockDividendsResults } from './stockDividends';
import {
  IStockFinancialQuery,
  IStockFinancialResults,
} from './stockFinancials';
import { IStockSplitsResults } from './stockSplits';
import { ITickerDetailsFormatted } from './tickerDetails';
import { ITickerNews, ITickerNewsQuery } from './tickerNews';
import { ITickers, ITickersQuery } from './tickers';
import { IV3TickersQuery, IV3TickersResponse } from './v3Tickers';
import { ITickerTypes } from './tickerTypes';
export { ILocalesResponse } from './locales';
export { IMarketHolyday } from './marketHolidays';
export { IMarketResponse } from './markets';
export { IMarketStatus } from './marketStatus';
export { IStockDividendsResults } from './stockDividends';
export {
  IStockFinancialQuery,
  IStockFinancialResults,
} from './stockFinancials';
export { IStockSplitsResults } from './stockSplits';
export { ITickerDetailsFormatted } from './tickerDetails';
export { ITickerNews, ITickerNewsQuery } from './tickerNews';
export { ITickers, ITickersQuery } from './tickers';
export {
  IV3TickersQuery,
  IV3Ticker,
  IV3TickersResponse as IV3Tickers,
} from './v3Tickers';
export { ITickerTypes } from './tickerTypes';
export interface IReferenceClient {
  locales: () => Promise<ILocalesResponse>;
  markets: () => Promise<IMarketResponse>;
  marketHolydays: () => Promise<IMarketHolyday[]>;
  marketStatus: () => Promise<IMarketStatus>;
  stockDividends: (symbol: string) => Promise<IStockDividendsResults>;
  stockFinancials: (
    symbol: string,
    query?: IStockFinancialQuery,
  ) => Promise<IStockFinancialResults[]>;
  stockSplits: (symbol: string) => Promise<IStockSplitsResults>;
  tickerDetails: (symbol: string) => Promise<ITickerDetailsFormatted>;
  tickerNews: (
    symbol: string,
    query?: ITickerNewsQuery,
  ) => Promise<ITickerNews[]>;
  tickers: (query?: ITickersQuery) => Promise<ITickers[]>;
  v3Tickers: (query?: IV3TickersQuery) => Promise<IV3TickersResponse>;
  tickerTypes: () => Promise<ITickerTypes>;
}
export declare const referenceClient: (apiKey: string) => IReferenceClient;
export default referenceClient;
