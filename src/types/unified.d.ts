declare module "unified" {
  export interface Plugin<T extends unknown[] = unknown[]> {
    (options?: T[0]): void;
  }
}
