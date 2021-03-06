export interface IStockSplit {
  ticker: string;
  exDate: string;
  paymentDate: string;
  recordDate?: string;
  declaredDate?: string;
  ratio: number;
  tofactor: number;
  forfactor: number;
}
export interface IStockSplitsResults {
  status?: string;
  count?: number;
  results?: IStockSplit[];
}
export declare const stockSplits: (
  apiKey: string,
  symbol: string,
) => Promise<IStockSplitsResults>;
