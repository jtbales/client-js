export interface IQuoteForexEvent {
  ev: string;
  p: string;
  x: string;
  a: number;
  b: number;
  t: number;
}
export interface IAggegateForexEvent {
  ev: string;
  pair: string;
  o: number;
  c: number;
  h: number;
  l: number;
  v: number;
  s: number;
}
export declare const getForexWebsocket: (apiKey: string) => any;
