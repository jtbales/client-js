import {
  IAdjustedQuery,
  IAggregateQuery,
  IAggResponseFormatted
} from "../stocks/aggregates";
export declare const cryptoPreviousClose: (
  apiKey: string,
  ticker: string,
  query?: IAdjustedQuery
) => Promise<IAggResponseFormatted>;
export declare const cryptoAggregates: (
  apiKey: string,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery
) => Promise<IAggResponseFormatted>;
export declare const cryptoGroupedDaily: (
  apiKey: string,
  locale: string,
  market: string,
  date: string,
  query?: IAdjustedQuery
) => Promise<IAggResponseFormatted>;
