export interface IExchangeRaw {
  id: number;
  type: string;
  market: string;
  mic: string;
  name: string;
  tape: string;
}
export interface IExchangeFormatted {
  id: number;
  type: string;
  market: string;
  mic: string;
  marketIdentifierCode: string;
  name: string;
  tape: string;
}
export declare const exchanges: (
  apiKey: string,
) => Promise<IExchangeFormatted[]>;
