import { SortableListItemType } from "../widget-setting/settings-lib/property-setting/table/enum";

export const TABLE_COLUMN_TYPE_LIST = [
  {
    label: "文本",
    value: SortableListItemType.Input,
  },
  {
    label: "数字",
    value: SortableListItemType.Number,
  },
  {
    label: "日期",
    value: SortableListItemType.Date,
  },
  {
    label: "链接",
    value: SortableListItemType.Link,
  },
];
