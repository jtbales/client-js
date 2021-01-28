import { IAggregateQuery, IAggResponseFormatted } from "../stocks/aggregates";
export declare const forexPreviousClose: (
  apiKey: string,
  ticker: string,
  query?: IAggregateQuery
) => Promise<IAggResponseFormatted>;
export declare const forexAggregates: (
  apiKey: string,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery
) => Promise<IAggResponseFormatted>;
export declare const forexGroupedDaily: (
  apiKey: string,
  locale: string,
  market: string,
  date: string,
  query?: IAggregateQuery
) => Promise<IAggResponseFormatted>;
