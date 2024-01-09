import search from "/assets/search.svg";

const LargeSearchBar = () => {
  return (
    <div className="px-4 py-2 bg-black-95 rounded-md w-full max-w-400 flex items-center gap-2">
      <img src={search} alt="search icon" />
      <input
        type="text"
        placeholder="Search features, tutorials, etc."
        className="bg-transparent focus:outline-none placeholder:text-body1"
      />
    </div>
  );
};

export default LargeSearchBar;
