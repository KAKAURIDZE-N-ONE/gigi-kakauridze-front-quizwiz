import FilterIcon from "../svgs/FilterIcon";

function FilterButton() {
  return (
    <div>
      <div
        className="flex gap-2 items-center justify-center
  border border-[#66708599] rounded-[0.625rem] w-[5.3125rem]
  h-[2.375rem] cursor-pointer
  "
      >
        <FilterIcon />
        <p className="text-gray text-sm"> Filter</p>
      </div>
    </div>
  );
}

export default FilterButton;
