"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Copy, Share2, Heart } from "lucide-react";
import { Emoji } from "@/lib/emoji-data";
import { copyToClipboard } from "@/lib/utils";
import { addToFavorites, removeFromFavorites, isFavorite } from "@/lib/favorites";
import { EmojiGrid } from "./emoji-grid";

interface EmojiDetailProps {
  emoji: Emoji;
  relatedEmojis: Emoji[];
  locale: string;
}

export function EmojiDetail({ emoji, relatedEmojis, locale }: EmojiDetailProps) {
  const [copying, setCopying] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const t = useTranslations("common");

  useEffect(() => {
    setFavorite(isFavorite(emoji.unicode));
  }, [emoji.unicode]);

  const handleCopy = async () => {
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: emoji.name[locale as keyof typeof emoji.name],
          text: emoji.emoji,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    }
  };

  const handleFavorite = () => {
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
    <div className="space-y-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <div className="text-9xl select-none">{emoji.emoji}</div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {emoji.name[locale as keyof typeof emoji.name]}
            </h1>
            <p className="text-gray-600">Unicode: {emoji.unicode}</p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleCopy}
              disabled={copying}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              <Copy className="w-5 h-5" />
              {t("copyToClipboard")}
            </button>
            
            <button
              onClick={handleFavorite}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                favorite 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
              {favorite ? t("removeFromFavorites") : t("addToFavorites")}
            </button>
            
            {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                {t("shareEmoji")}
              </button>
            )}
          </div>

          <div className="pt-6 border-t">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {emoji.keywords[locale as keyof typeof emoji.keywords].map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {relatedEmojis.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t("relatedEmojis")}
          </h2>
          <EmojiGrid emojis={relatedEmojis} />
        </div>
      )}
    </div>
  );
}