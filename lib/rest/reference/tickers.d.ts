import { IPolygonQuery } from '../transport/request';
export interface ITickersQuery extends IPolygonQuery {
  sort?: string;
  type?: string;
  market?: string;
  locale?: string;
  search?: string;
  perpage?: number;
  page?: number;
  active?: boolean;
}
export interface ITickers {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  currency: string;
  active: string;
  primaryExch: string;
  type: string;
  codes: {
    [key: string]: string;
  };
  updated: string;
  url: string;
}
export declare const tickers: (
  apiKey: string,
  query?: ITickersQuery,
) => Promise<ITickers[]>;
