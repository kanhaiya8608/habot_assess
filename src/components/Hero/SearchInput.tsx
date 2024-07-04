import React, { useState, ChangeEventHandler } from "react";
import { IconType } from "react-icons";
interface SearchInputProps {
    icon: IconType;
    placeholder: string;
  }

export const SearchInput: React.FC<SearchInputProps> = ({ icon: Icon, placeholder }) => {
    const [inputValue, setInputValue] = useState("");
  
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Icon size="1.5em" className="text-orange-500"/>
        </span>
        <input
          type="text"
          className="pl-12 p-4 w-full text-black font-light bg-white rounded-lg focus:outline-none"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    );
  };
  