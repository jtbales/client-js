import { IPolygonQuery } from '../transport/request';
import {
  ICryptoTickJsonFormatted,
  ICryptoTickJsonRaw,
} from './ICryptoTickJson';
export interface IHistoricCryptoTradeRaw {
  day: string;
  map: {
    c: string;
    p: string;
    s: string;
    x: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: ICryptoTickJsonRaw[];
}
export interface IHistoricCryptoTradeFormatted {
  day: string;
  map: {
    c: string;
    p: string;
    s: string;
    x: string;
    t: string;
  };
  msLatency: number;
  status: string;
  symbol: string;
  ticks: ICryptoTickJsonFormatted[];
}
export interface IHistoricCryptoTradeQuery extends IPolygonQuery {
  offset?: number;
  limit: number;
}
export declare const historicCryptoTrades: (
  apiKey: string,
  from: string,
  to: string,
  date: string,
  query?: IHistoricCryptoTradeQuery,
) => Promise<IHistoricCryptoTradeFormatted>;
