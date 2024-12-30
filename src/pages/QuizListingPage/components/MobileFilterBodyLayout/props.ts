import { ReactNode } from "react";

export type PropsType = {
  handleResetFilters: () => void;
  handleTurnOfModal: () => void;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateActiveFilter: (filter: "filter" | "sort") => void;
  activeFilter: string;
  handleConfirmClick: () => void;
  children: ReactNode;
  changeIsMade: boolean;
};
