export type PageData = {
  pageId: string;
  pageData: {
    pageConf: {
      backgroundColor: string;
      pageDesc: string;
      pageName: string;
      pageUrl: string;
    };
    compList: Array<{
      id: string;
      label: string;
      name: string;
      type: string;
      selected: boolean;
      setting: {
        properties: {};
        style: {};
        advanced?: {};
      };
    }>;
  };
};
