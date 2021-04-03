// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_tickers
import { get, IPolygonQuery } from '../transport/request';

type MarketType = 'stocks' | 'crypto' | 'fx';
type LocalType = 'us' | 'global';

export interface IV3TickersQuery extends IPolygonQuery {
  /** Specify the type of the tickers. Find the types that we support
   * via our Ticker Types API. Defaults to empty string which queries all types. */
  type?: string;
  market?: MarketType;
  exchange?: string;
  cusip?: string;
  /** Specify a point in time to retrieve tickers available on that date.
   * Defaults to the most recent available date. */
  date?: string;
  active?: boolean;
  /** The field to sort the results on. Default is ticker. */
  sort?:
    | 'ticker'
    | 'name'
    | 'market'
    | 'locale'
    | 'primary_exchange'
    | 'type'
    | 'active'
    | 'currency_name'
    | 'cik'
    | 'composite_figi'
    | 'share_class_figi'
    | 'last_updated_utc'
    | 'delisted_utc';
  order?: 'asc' | 'desc';
  /** Limit the size of the response, default is 100 and max is 500. */
  limit?: number;
}

export interface IV3TickersResponse {
  results: IV3Ticker[];
  /** If present, this value can be used to fetch the next page
   * of data by appending this to the API url host. */
  next_page_path?: string;
  request_id: string;
  status: string;
  count: number;
}

export interface IV3Ticker {
  ticker: string;
  name: string;
  market: MarketType;
  locale: LocalType;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: string;
  cik: string;
  composite_figi: string;
  share_class_figi: string;
  last_updated_utc: string;
  delisted_utc?: string;
}

export const v3Tickers = async (
  apiKey: string,
  query?: IV3TickersQuery,
): Promise<IV3TickersResponse[]> => {
  const path: string = '/vX/reference/tickers';
  return get(path, apiKey, query);
};
