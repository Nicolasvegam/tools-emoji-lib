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
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">
          {t("meta.title")}
        </h2>
        <p className="text-lg text-gray-600">
          {t("meta.description", { count: getAllEmojis().length })}
        </p>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          {t("common.categories")}
        </h3>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <EmojiGrid emojis={filteredEmojis} />
    </div>
  );
}