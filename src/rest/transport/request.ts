import fetch from "cross-fetch";
import { stringify } from "query-string";

export interface IPolygonQuery {
  [key: string]: string | number | boolean | undefined;
}

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export const auth = (apiKey, func) => (...args) => func(apiKey, ...args);

export const get = async (
  path: string,
  apiKey: string = "invalid",
  query?: IPolygonQuery
): Promise<any> => {
  if (!apiKey) {
    throw new Error("API KEY not configured...");
  }

  const authenticatedQuery: IPolygonQueryWithCredentials = {
    ...query,
    apiKey
  };

  const queryString = stringify(authenticatedQuery, { encode: true });

  const url = `https://api.polygon.io${path}?${queryString}`;

  const response = await fetch(url);

  if (response.status >= 400) {
    const message = await response.text();
    throw new Error(message);
  }

  return response.json();
};
