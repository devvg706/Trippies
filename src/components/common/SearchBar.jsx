import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ Setquery, query }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-full max-w-md">
        {/* Search Icon */}
        {/* <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => Setquery(e.target.value.toLowerCase())}
          placeholder="Search trips, destinations..."
          className="w-full pl-12 pr-4 mb-10 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 
          text-gray-200 placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 
          focus:ring-teal-400 focus:border-transparent transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;
