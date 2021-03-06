import { IPolygonQuery } from '../transport/request';
export interface IV2HistoricQuotesQuery extends IPolygonQuery {
  limit?: number;
  reverse?: boolean;
  timestamp?: number;
  timestampLimit?: number;
}
export interface IQuoteV2Raw {
  T?: string;
  t: number;
  y: number;
  f?: number;
  q: number;
  c?: number[];
  i?: number[];
  p: number;
  x: number;
  s: number;
  P: number;
  X: number;
  S: number;
  z: number;
}
export interface IQuoteV2Formatted {
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
  c?: number[];
  conditions?: number[];
  i?: number[];
  indicators?: number[];
  p: number;
  bidPrice: number;
  x: number;
  bidExchangeId: number;
  s: number;
  bidSize: number;
  P: number;
  askPrice: number;
  X: number;
  askExchangeId: number;
  S: number;
  askSize: number;
  z: number;
  tapeWhereTradeOccurred: number;
}
export declare const formatIQuoteV2Raw: (raw: IQuoteV2Raw) => IQuoteV2Formatted;
export interface IV2HistoricQuotesResultRaw {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results?: IQuoteV2Raw[];
}
export interface IV2HistoricQuotesResultFormatted {
  results_count?: number;
  db_latency?: number;
  success: boolean;
  ticker: string;
  results?: IQuoteV2Formatted[];
}
export declare const v2HistoricQuotes: (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV2HistoricQuotesQuery,
) => Promise<IV2HistoricQuotesResultFormatted>;
