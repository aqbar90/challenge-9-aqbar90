import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div
      className="
        flex
        items-center
        rounded-2xl
        border
        border-neutral-700
        bg-neutral-900/80
        px-4
        py-2
        backdrop-blur-md
      "
    >
      <Search size={18} className="text-neutral-400" />
      <input
        type="text"
        placeholder="Search Movie"
        className="
          ml-3
          bg-transparent
          text-sm
          text-white
          outline-none
          placeholder:text-neutral-400
        "
      />
    </div>
  );
};

export default SearchInput;
