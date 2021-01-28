export interface IMarketHolyday {
  exchange: string;
  name: string;
  status: string;
  date: string;
  open?: string;
  close?: string;
}
export declare const marketHolydays: (
  apiKey: string
) => Promise<IMarketHolyday[]>;
