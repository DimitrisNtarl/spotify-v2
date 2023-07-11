function Search({ search, setSearch }) {
  return (
    <div className="max-w-[1150px] bg-[#0c0c0c] rounded-full overflow-hidden border-2 border-[#15883e] p-1.5 px-5 pr-8 flex items-center mx-4">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse border-[#20CB67]" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#0c0c0c] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#FAFAFA] text-s"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
