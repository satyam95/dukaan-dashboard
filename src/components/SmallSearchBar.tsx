import search from "/assets/search.svg";

const SmallSearchBar = () => {
  return (
    <div className="px-4 py-2 bg-transparent rounded w-full max-w-248 border-black-85 border flex items-center gap-2">
      <img src={search} alt="search icon" />
      <input
        type="text"
        placeholder="Search by order ID..."
        className="bg-transparent focus:outline-none placeholder:text-body1"
      />
    </div>
  );
};

export default SmallSearchBar;
