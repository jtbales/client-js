export interface IStockDividend {
  symbol: string;
  type: string;
  exDate: string;
  paymentDate?: string;
  recordDate?: string;
  declaredDate?: string;
  amount: number;
  qualified?: string;
  flag?: string;
}
export interface IStockDividendsResults {
  status?: string;
  count?: number;
  results?: IStockDividend[];
}
export declare const stockDividends: (
  apiKey: string,
  symbol: string,
) => Promise<IStockDividendsResults>;
