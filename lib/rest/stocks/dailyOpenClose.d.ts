export interface IHistTrade {
  condition1: number;
  condition2: number;
  condition3: number;
  condition4: number;
  exchange: string;
  price: number;
  size: number;
  timestamp: string;
}
export interface IDailyOpenClose {
  symbol: string;
  open?: IHistTrade;
  close?: IHistTrade;
  afterHours?: IHistTrade;
}
export declare const dailyOpenClose: (
  apiKey: string,
  symbol: string,
  date: string,
) => Promise<IDailyOpenClose>;
