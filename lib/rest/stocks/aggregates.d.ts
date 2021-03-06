import { IPolygonQuery } from '../transport/request';
export interface IAggV2Raw {
  T?: string;
  v: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t?: number;
  n?: number;
}
export interface IAggV2Formatted {
  T?: string;
  tickerSymbol?: string;
  v: number;
  volume: number;
  o: number;
  open: number;
  c: number;
  close: number;
  h: number;
  high: number;
  l: number;
  low: number;
  t?: number;
  timestamp?: number;
  n?: number;
  numberOfItems?: number;
}
export interface IAggResponseRaw {
  ticker: string;
  status: string;
  adjusted: boolean;
  queryCount?: number;
  resultsCount?: number;
  results: IAggV2Raw[];
}
export interface IAggResponseFormatted {
  ticker: string;
  status: string;
  adjusted: boolean;
  queryCount?: number;
  resultsCount?: number;
  results: IAggV2Formatted[];
}
export declare const formatIAggResponseRaw: (
  raw: IAggResponseRaw,
) => IAggResponseFormatted;
export interface IAdjustedQuery extends IPolygonQuery {
  adjusted?: boolean;
}
export interface IAggregateQuery extends IPolygonQuery {
  adjusted?: boolean;
  limit?: number;
}
export declare const stocksPreviousClose: (
  apiKey: string,
  ticker: string,
  query?: IAdjustedQuery,
) => Promise<IAggResponseFormatted>;
export declare const stocksAggregates: (
  apikey: string,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggregateQuery,
) => Promise<IAggResponseFormatted>;
export declare const stocksGroupedDaily: (
  apiKey: string,
  locale: string,
  market: string,
  date: string,
  query?: IAdjustedQuery,
) => Promise<IAggResponseFormatted>;
