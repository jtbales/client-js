export interface ILocales {
  locale: string;
  desc: string;
}
export interface ILocalesResponse {
  status?: string;
  results?: ILocales[];
}
export declare const locales: (apiKeys: string) => Promise<ILocalesResponse>;
