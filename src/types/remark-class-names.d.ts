declare module "remark-class-names" {
  import { Plugin } from "unified";

  interface ClassNamesOptions {
    [key: string]: string;
  }

  const classNames: Plugin<[ClassNamesOptions]>;
  export default classNames;
}
