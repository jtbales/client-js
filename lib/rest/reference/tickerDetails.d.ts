export interface ITickerDetailsRaw {
  logo?: string;
  exchange: string;
  name: string;
  symbol: string;
  listdate?: string;
  cik?: string;
  bloomberg?: string;
  figi?: string;
  lei?: string;
  sic?: number;
  country?: string;
  industry?: string;
  sector?: string;
  marketcap?: number;
  employees?: number;
  phone?: string;
  ceo?: string;
  url?: string;
  description?: string;
  similar?: string[];
  tags?: string[];
  updated?: string;
}
export interface ITickerDetailsFormatted {
  logo?: string;
  exchange: string;
  name: string;
  symbol: string;
  listdate?: string;
  cik?: string;
  bloomberg?: string;
  figi?: string;
  legalEntityIdentifier?: string;
  standardIndustryClassification?: number;
  country?: string;
  industry?: string;
  sector?: string;
  marketcap?: number;
  employees?: number;
  phone?: string;
  ceo?: string;
  url?: string;
  description?: string;
  similar?: string[];
  tags?: string[];
  updated?: string;
}
export declare const tickerDetails: (
  apiKey: string,
  symbol: string,
) => Promise<ITickerDetailsFormatted>;
