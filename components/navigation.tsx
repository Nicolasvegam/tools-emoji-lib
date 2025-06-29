"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { Heart, Home, Sparkles } from "lucide-react";
import { LanguageSelector } from "./language-selector";

export function Navigation() {
  const t = useTranslations("common");
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;

  const isActive = (path: string) => {
    return pathname === `/${locale}${path}`;
  };

  return (
    <nav className="flex justify-between items-center mb-8">
      {/* Navigation Links */}
      <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-200 p-2">
        <Link
          href={`/${locale}`}
          className={`group relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
            isActive('')
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <Home className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
            isActive('') ? 'text-white' : 'text-gray-600'
          }`} />
          <span className="hidden sm:inline font-medium">{t("home")}</span>
          
          {/* Active indicator */}
          {isActive('') && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
          )}
        </Link>
        
        <Link
          href={`/${locale}/favorites`}
          className={`group relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
            isActive('/favorites')
              ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <Heart className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
            isActive('/favorites') ? 'text-white' : 'text-gray-600'
          }`} />
          <span className="hidden sm:inline font-medium">{t("favorites")}</span>
          
          {/* Active indicator */}
          {isActive('/favorites') && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
          )}
        </Link>
        
        <Link
          href={`/${locale}/emoji`}
          className={`group relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
            isActive('/emoji')
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <Sparkles className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
            isActive('/emoji') ? 'text-white' : 'text-gray-600'
          }`} />
          <span className="hidden sm:inline font-medium">Random</span>
          
          {/* Active indicator */}
          {isActive('/emoji') && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
          )}
        </Link>
      </div>

      {/* Language Selector */}
      <LanguageSelector />
    </nav>
  );
} 