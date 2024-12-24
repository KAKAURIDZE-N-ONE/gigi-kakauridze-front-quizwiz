import { useState } from "react";
import SearchIcon from "../svgs/SearchIcon";
import XButton from "../svgs/XButton";

type ModalBodyProps = {
  setFilterIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileFilterModalBody: React.FC<ModalBodyProps> = ({
  setFilterIsActive,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("filter");

  function handleTurnOfModal() {
    setFilterIsActive(false);
  }

  function handleUpdateActiveFilter(filter: string) {
    setActiveFilter(filter);
  }

  console.log(activeFilter);

  return (
    <div className="bg-white w-full h-full">
      <div
        className="h-18  px-[1.125rem] flex items-center 
      justify-between bg-white4 border-b border-b-white3"
      >
        <h4 className="text-sm text-gray font-semibold">Reset</h4>
        <h3 className="text-gray font-semibold text-sm">FILTERS</h3>
        <div onClick={handleTurnOfModal} className="cursor-pointer p-[0.2rem]">
          <XButton />
        </div>
      </div>
      <div
        className="h-18 px-[1.125rem] flex items-center
       border-b border-b-white3"
      >
        <div className="flex gap-2 items-center">
          <SearchIcon />
          <h3 className="text-gray text-sm">Search</h3>
        </div>
      </div>
      <div className="px-[1.125rem]">
        <div className="py-[1.3125rem]">
          <div className="h-12 flex bg-[#D0D5DD4D] rounded-full relative">
            <div
              onClick={() => handleUpdateActiveFilter("filter")}
              className="flex items-center justify-center w-1/2 relative z-10"
            >
              <p className="text-sm font-semibold text-blue">Filter</p>
            </div>
            <div
              onClick={() => handleUpdateActiveFilter("sort")}
              className="flex items-center justify-center w-1/2"
            >
              <p className="text-sm font-semibold text-[#66708580]">Sorting</p>
            </div>
            <div
              className="absolute left-0 w-1/2 h-full bg-white
            rounded-full border border-white3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterModalBody;
