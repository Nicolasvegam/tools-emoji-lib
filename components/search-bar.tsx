"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const t = useTranslations("common");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
      <div className="relative">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-hover:text-blue-500 transition-colors duration-200" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={t("search")}
          className="w-full pl-16 pr-6 py-4 text-lg rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 shadow-lg hover:shadow-xl placeholder-gray-400"
        />
        {value && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}