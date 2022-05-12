import { CollapseColumnListType } from "src/app/widget-setting/settings-lib/property-setting/table/type";

export type TableAttribute = {
  columns: CollapseColumnListType[];
  datas: Array<{ [key: string]: any }>;
};
