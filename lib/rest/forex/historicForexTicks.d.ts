import { IPolygonQuery } from '../transport/request';
export interface IV1ForexRaw {
  a: number;
  b: number;
  t: number;
}
export interface IV1ForexFormatted {
  a: number;
  ask: number;
  b: number;
  bid: number;
  t: number;
  timestamp: number;
}
export declare const formatIV1ForexRaw: (raw: IV1ForexRaw) => IV1ForexFormatted;
export interface IHistoricForexTicksRaw {
  day: string;
  map: {
    a: string;
    b: string;
    t: string;
  };
  msLatency: number;
  status: string;
  pair: string;
  ticks: IV1ForexRaw[];
}
export interface IHistoricForexTicksFormatted {
  day: string;
  map: {
    a: string;
    b: string;
    t: string;
  };
  msLatency: number;
  status: string;
  pair: string;
  ticks: IV1ForexFormatted[];
}
export interface IHistoricForexTicksQuery extends IPolygonQuery {
  offset?: number;
  limit: number;
}
export declare const historicForexTicks: (
  apiKey: string,
  from: string,
  to: string,
  date: string,
  query: IHistoricForexTicksQuery,
) => Promise<IHistoricForexTicksFormatted>;
