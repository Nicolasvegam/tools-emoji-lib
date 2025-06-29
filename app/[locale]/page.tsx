"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";
import { EmojiGrid } from "@/components/emoji-grid";
import { getAllEmojis, getEmojisByCategory, searchEmojis } from "@/lib/emoji-data";
import { useParams } from "next/navigation";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  const filteredEmojis = useMemo(() => {
    let emojis = getAllEmojis();

    if (selectedCategory) {
      emojis = getEmojisByCategory(selectedCategory);
    }

    if (searchQuery) {
      emojis = searchEmojis(searchQuery, locale);
    }

    return emojis;
  }, [searchQuery, selectedCategory, locale]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              {t("meta.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("meta.description", { count: getAllEmojis().length })}
            </p>
          </div>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t("common.categories")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {filteredEmojis.length > 0 ? (
            <>
              <div className="text-center">
                <p className="text-lg text-gray-600">
                  {filteredEmojis.length} {filteredEmojis.length === 1 ? 'emoji' : 'emojis'} found
                </p>
              </div>
              <div className="animate-fade-in">
                <EmojiGrid emojis={filteredEmojis} />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-8xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No emojis found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search terms or selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}