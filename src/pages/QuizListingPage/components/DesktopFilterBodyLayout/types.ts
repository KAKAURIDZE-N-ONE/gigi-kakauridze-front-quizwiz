import { ReactNode } from "react";

export type PropsType = {
  SortBody: ReactNode;
  FilterBody: ReactNode;
  handleConfirmClick: () => void;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  handleResetFilters: () => void;
  handleTurnOfModal: () => void;
  changeIsMade: boolean;
};
