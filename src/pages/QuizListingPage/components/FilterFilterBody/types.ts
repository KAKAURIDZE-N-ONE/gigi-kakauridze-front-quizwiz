import { Filters } from "../../types";

export interface HookType {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filterSearch: string;
}
export interface PropsType extends HookType {
  handleTurnOfModal: () => void;
  filters: Filters;
  type?: "desktop";
}
