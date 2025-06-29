"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { Link } from "@/i18n/routing";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as string;

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline font-medium text-gray-700">
          {currentLanguage.name}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-lg border-2 border-gray-200 py-2 min-w-[200px] z-50 animate-fade-in">
          {languages.map((language) => (
            <Link
              key={language.code}
              href={pathname}
              locale={language.code}
              onClick={handleLanguageChange}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                language.code === currentLocale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {language.code === currentLocale && (
                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}