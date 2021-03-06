import { IPolygonQuery } from '../transport/request';
export interface IV1HistoricQuotesQuery extends IPolygonQuery {
  limit?: number;
  offset?: number;
}
export interface IQuoteV1Raw {
  c: number;
  bE: number;
  aE: number;
  aP: number;
  bP: number;
  bS: number;
  aS: number;
  t: number;
}
export interface IQuoteV1Formatted {
  c: number;
  condition: number;
  bE: number;
  bidExchange: number;
  aE: number;
  askExchange: number;
  aP: number;
  askPrice: number;
  bP: number;
  buyPrice: number;
  bS: number;
  bidSize: number;
  aS: number;
  askSize: number;
  t: number;
  timestamp: number;
}
export declare const formatIQuoteV1Raw: (raw: IQuoteV1Raw) => IQuoteV1Formatted;
export interface IV1HistoricQuotesResultRaw {
  day: string;
  map: {
    aE: string;
    aP: string;
    aS: string;
    bE: string;
    bP: string;
    bS: string;
    c: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: IQuoteV1Raw[];
}
export interface IV1HistoricQuotesResultFormatted {
  day: string;
  map: {
    aE: string;
    aP: string;
    aS: string;
    bE: string;
    bP: string;
    bS: string;
    c: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: IQuoteV1Formatted[];
}
export declare const formatIV1HistoricQuotesResultRaw: (
  raw: IV1HistoricQuotesResultRaw,
) => IV1HistoricQuotesResultFormatted;
export declare const v1HistoricQuotes: (
  apiKey: string,
  symbol: string,
  date: string,
  query?: IV1HistoricQuotesQuery,
) => Promise<IV1HistoricQuotesResultFormatted>;
