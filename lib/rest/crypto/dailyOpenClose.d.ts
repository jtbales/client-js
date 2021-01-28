import { ICryptoDailyOpenCloseFormatted } from "./ICryptoTickJson";
export declare const cryptoDailyOpenClose: (
  apiKey: string,
  from: string,
  to: string,
  date: string
) => Promise<ICryptoDailyOpenCloseFormatted>;
