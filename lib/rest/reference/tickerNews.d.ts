import { IPolygonQuery } from '../transport/request';
export interface ITickerNewsQuery extends IPolygonQuery {
  perpage?: number;
  page?: number;
}
export interface ITickerNews {
  symbols: string[];
  title: string;
  url: string;
  source: string;
  summary: string;
  image?: string;
  timestamp: string;
  keywords?: string[];
}
export declare const tickerNews: (
  apiKey: string,
  symbol: string,
  query?: ITickerNewsQuery,
) => Promise<ITickerNews[]>;
