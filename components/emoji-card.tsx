"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Heart, Copy, ExternalLink } from "lucide-react";
import { Emoji } from "@/lib/emoji-data";
import { copyToClipboard } from "@/lib/utils";
import { addToFavorites, removeFromFavorites, isFavorite } from "@/lib/favorites";
import Link from "next/link";
import { useParams } from "next/navigation";

interface EmojiCardProps {
  emoji: Emoji;
}

export function EmojiCard({ emoji }: EmojiCardProps) {
  const [copying, setCopying] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("common");
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    setFavorite(isFavorite(emoji.unicode));
  }, [emoji.unicode]);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (copying) return;

    setCopying(true);
    try {
      await copyToClipboard(emoji.emoji);
      toast.success(t("copied"));
    } catch {
      toast.error("Failed to copy");
    }
    setCopying(false);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorite) {
      removeFromFavorites(emoji.unicode);
      setFavorite(false);
      toast.success(t("removedFromFavorites"));
    } else {
      addToFavorites({
        emoji: emoji.emoji,
        name: emoji.name[locale as keyof typeof emoji.name],
        unicode: emoji.unicode,
        slug: emoji.slug[locale as keyof typeof emoji.slug],
        addedAt: Date.now(),
      });
      setFavorite(true);
      toast.success(t("addedToFavorites"));
    }
  };

  return (
    <Link
      href={`/${locale}/emoji/${emoji.slug[locale as keyof typeof emoji.slug]}`}
      className="group relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={handleCopy}
        className="relative flex flex-col items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:bg-white"
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Emoji */}
        <div className="relative text-5xl md:text-6xl mb-3 select-none group-hover:scale-110 transition-transform duration-300">
          {emoji.emoji}
        </div>
        
        {/* Name */}
        <p className="relative text-xs md:text-sm text-gray-600 text-center line-clamp-2 font-medium group-hover:text-gray-800 transition-colors duration-300">
          {emoji.name[locale as keyof typeof emoji.name]}
        </p>
        
        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleFavorite}
            className="p-1.5 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
            title={favorite ? t("removeFromFavorites") : t("addToFavorites")}
          >
            <Heart 
              className={`w-3 h-3 ${favorite ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} 
            />
          </button>
          
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
            title={t("copy")}
          >
            <Copy className="w-3 h-3 text-gray-400 hover:text-blue-500" />
          </button>
        </div>
        
        {/* External link indicator */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-3 h-3 text-gray-400" />
        </div>
      </div>
      
      {/* Copying overlay */}
      {copying && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl z-10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <span className="text-sm font-medium text-blue-600">{t("copied")}</span>
          </div>
        </div>
      )}
    </Link>
  );
}