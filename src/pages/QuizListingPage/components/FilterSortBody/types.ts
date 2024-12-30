export type PropsType = {
  setSortBy: React.Dispatch<React.SetStateAction<string | undefined>>;
  sortBy: string | undefined;
  type?: "desktop";
};
