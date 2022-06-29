export type TableDataType = {
  caption: string;
  headers: string[];
  rowTitles?: string[];
  rowTitle?: string;
  columns?: {
    [id: string]: string[];
  };
  rows?: object[];
};
