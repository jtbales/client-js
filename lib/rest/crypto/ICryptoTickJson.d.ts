export interface ICryptoTickJsonRaw {
  p: number;
  s: number;
  x: number;
  c: number[];
  t: number;
}
export interface ICryptoDailyOpenCloseRaw {
  symbol: string;
  isUTC?: boolean;
  day?: string;
  open?: number;
  close?: number;
  openTrades?: ICryptoTickJsonRaw[];
  closingTrades?: ICryptoTickJsonRaw[];
}
export interface ICryptoTickJsonFormatted {
  p: number;
  price: number;
  s: number;
  size: number;
  x: number;
  exchange: number;
  c: number[];
  conditions: number[];
  t: number;
  timestamp: number;
}
export interface ICryptoDailyOpenCloseFormatted {
  symbol: string;
  isUTC?: boolean;
  day?: string;
  open?: number;
  close?: number;
  openTrades?: ICryptoTickJsonFormatted[];
  closingTrades?: ICryptoTickJsonFormatted[];
}
export declare const formatICryptoTickJsonRaw: (
  trade: ICryptoTickJsonRaw,
) => ICryptoTickJsonFormatted;
