export interface IQuoteCryptoEvent {
  ev: string;
  pair: string;
  lp: number;
  ls: number;
  bp: number;
  bs: number;
  ap: number;
  as: number;
  t: number;
  x: number;
  r: number;
}
export interface ITradeCryptoEvent {
  ev: string;
  pair: string;
  p: number;
  t: number;
  s: number;
  c: number[];
  i: string;
  x: number;
  r: number;
}
export interface IAggregateCryptoEvent {
  ev: string;
  pair: string;
  o: number;
  ox: number;
  h: number;
  hx: number;
  l: number;
  lx: number;
  c: number;
  cx: number;
  v: number;
  s: number;
  e: number;
}
export interface ISIPCryptoEvent {
  ev: string;
  pair: string;
  as: number;
  ap: number;
  ax: number;
  bs: number;
  bp: number;
  bx: number;
  t: number;
}
export interface ILevel2CryptoEvent {
  ev: string;
  pair: string;
  b: any[];
  a: any[];
  t: number;
  x: number;
  r: number;
}
export declare const getCryptoWebsocket: (apiKey: string) => any;
