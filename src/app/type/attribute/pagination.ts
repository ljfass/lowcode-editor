export type PaginationAttribute = {
  total?: number;
  pageIndex: number;
  pageSize: number;
  disabled: boolean;
  showQuickJumper: boolean;
  showSizeChanger: boolean;
  size: "small" | "default";
  pageSizeOptions: number[];
  hideOnSinglePage: boolean;
};
