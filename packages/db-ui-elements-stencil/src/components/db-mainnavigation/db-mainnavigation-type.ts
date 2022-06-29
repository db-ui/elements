export type DbMainnavigationItemType = {
  html: string;
  children?: DbMainnavigationItemType[];
};

export type DbMainnavigationDataType = {
  link: string; // Link to navigate
  label: string; // Visible text to user
  current?: boolean; // Marked as current selected
  children?: DbMainnavigationDataType[]; // Submenu, sublinks
};
