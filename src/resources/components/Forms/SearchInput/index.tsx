// SearchInput.tsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Filters } from "@/app/types";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (filters: Filters) => void;
}

function SearchInput({ placeholder, onSearch }: SearchInputProps) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch({ searchQuery: query });
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch({ searchQuery: query });
    }
  };

  return (
    <div className="relative w-[300px] md:w-full max-w-[488px] h-full max-h-14">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full h-10 md:h-14 px-4 py-2 pr-10 family-roboto dark:text-mauve-2 text-mauvedark-2 bg-mauve-2 dark:bg-mauvedark-2 border-[1px] border-mauve-7 dark:border-mauvedark-7 rounded-[4px] placeholder:text-mauve-9 dark:placeholder:text-mauvedark-9 focus:outline-none "
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 dark:text-mauve-2 text-mauvedark-2 mr-2"
      >
        <Icon icon="lets-icons:search-alt-fill" className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchInput;
