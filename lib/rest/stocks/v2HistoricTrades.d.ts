import { IPolygonQuery } from '../transport/request';
export interface IV2HistoricTradesQuery extends IPolygonQuery {
  limit?: number;
  reverse?: boolean;
  timestamp?: number;
  timestampLimit?: number;
}
export interface ITradeV2Raw {
  T?: string;
  t: number;
  y: number;
  r?: number;
  f?: number;
  q: number;
  i: string;
  x: number;
  s: number;
  c: number[];
  p: number;
  z: number;
}
export interface ITradeV2Formatted {
  T?: string;
  ticker?: string;
  t: number;
  SIPTimestamp: number;
  y: number;
  participantExchangeTimestamp: number;
  f?: number;
  tradeReportingFacilityTimestamp?: number;
  q: number;
  sequenceNumber: number;
  i: string;
  tradeId: string;
  x: number;
  exchange: number;
  s: number;
  size: number;
  c: number[];
  conditions: number[];
  p: number;
  price: number;
  z: number;
  tapeWhereTheTradeOccurred: number;
}
export declare const formatITradeV2Raw: (raw: ITradeV2Raw) => ITradeV2Formatted;
export interface IV2HistoricTradesResultRaw {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results: ITradeV2Raw[];
}
export interface IV2HistoricTradesResultFormatted {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results: ITradeV2Formatted[];
}
export declare const formatIV2HistoricTradeResultRaw: (
  raw: IV2HistoricTradesResultRaw,
) => IV2HistoricTradesResultFormatted;
export declare const v2HistoricTrades: (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV2HistoricTradesQuery,
) => Promise<IV2HistoricTradesResultFormatted>;
