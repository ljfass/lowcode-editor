import { DataSourceType } from "src/app/enum";
import { CollapseColumnListType } from "src/app/widget-setting/settings-lib/property-setting/table/type";

/**
 * 数据列
 * 数据源(两种类型：自定义处理函数/远程数据源)
 *    远程数据源： 名称(英文),请求地址，请求方法,请求参数
 * 操作列
 * 顶部操作
 * 风格和样式
 * 行选择器
 * 分页设置
 */

export type TableAttribute = {
  columns: CollapseColumnListType[];
  datas: Array<{ [key: string]: any }>;
  dataSrouceType?: DataSourceType;
  // showToolbar?: boolean;
  // showSearchbar?: boolean;
  // showPagination?: boolean;
  // searchbarPlaceholder?: string;
  // toolbarActions?: any[];
};
