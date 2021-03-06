export interface ICryptoTick {
  price: number;
  size: number;
  exchange: number;
  conditions: number[];
  timestamp: number;
}
export interface ILastCryptoAverage {
  avg?: number;
  tradesAveraged?: number;
}
export interface ILastTradeForACryptoPair {
  status: string;
  symbol: string;
  last: ICryptoTick;
  lastAverage: ILastCryptoAverage;
}
export declare const lastTradeForCryptoPair: (
  apiKey: string,
  from: string,
  to: string,
) => Promise<ILastTradeForACryptoPair>;
