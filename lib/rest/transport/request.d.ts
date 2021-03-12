export interface IPolygonQuery {
  [key: string]: string | number | boolean | undefined;
}
export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}
export declare const auth: (apiKey: any, func: any) => (...args: any[]) => any;
export declare const get: (
  path: string,
  apiKey?: string,
  query?: IPolygonQuery
) => Promise<any>;
