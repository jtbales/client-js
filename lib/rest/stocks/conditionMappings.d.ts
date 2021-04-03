export interface IConditionMappings {
  [key: string]: string;
}
export declare const conditionMappings: (
  apiKeys: string,
  ticktype?: string,
) => Promise<IConditionMappings>;
