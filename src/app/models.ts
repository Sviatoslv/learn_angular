export interface Result {
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  benefits: Array<string>;
  price: number;
}

export type APIResponse<T> = T[];
