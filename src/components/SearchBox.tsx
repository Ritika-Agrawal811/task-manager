import { BiSearchAlt2 } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div className="relative flex flex-grow">
      <label htmlFor="searchBox" className="absolute left-9999">
        Search
      </label>
      <input
        type="search"
        id="searchBox"
        className="bg-slate-100 px-3 py-2 rounded-l-lg text-lg w-40 md:w-80 flex-grow"
        placeholder="Search"
      />
      <div className="text-xl bg-slate-200 duration-150 hover:bg-slate-300 grid place-content-center py-2 px-2.5 rounded-r-lg">
        <BiSearchAlt2 />
      </div>
    </div>
  );
};

export default SearchBox;
