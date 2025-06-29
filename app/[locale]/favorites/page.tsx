"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Heart, Trash2 } from "lucide-react";
import { getFavorites, removeFromFavorites, clearFavorites } from "@/lib/favorites";
import { FavoriteEmoji } from "@/lib/favorites";
import { toast } from "sonner";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteEmoji[]>([]);
  const t = useTranslations("common");

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (unicode: string) => {
    removeFromFavorites(unicode);
    setFavorites(getFavorites());
    toast.success(t("removedFromFavorites"));
  };

  const handleClearAll = () => {
    if (favorites.length === 0) return;
    
    if (confirm("¿Estás seguro de que quieres eliminar todos los favoritos?")) {
      clearFavorites();
      setFavorites([]);
      toast.success("Todos los favoritos han sido eliminados");
    }
  };

  const copyToClipboard = async (emoji: string) => {
    try {
      await navigator.clipboard.writeText(emoji);
      toast.success(t("copied"));
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 text-red-500 fill-current" />
          {t("favorites")}
        </h2>
        <p className="text-lg text-gray-600">
          {favorites.length === 0 
            ? t("noFavorites") 
            : `${favorites.length} emoji${favorites.length === 1 ? '' : 's'} favorito${favorites.length === 1 ? '' : 's'}`
          }
        </p>
      </div>

      {favorites.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={handleClearAll}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Eliminar todos
          </button>
        </div>
      )}

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">{t("noFavorites")}</p>
          <p className="text-gray-400 mt-2">Haz clic en el corazón de cualquier emoji para agregarlo a favoritos</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {favorites.map((favorite) => (
            <div
              key={favorite.unicode}
              className="group relative bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all p-4"
            >
              <div
                onClick={() => copyToClipboard(favorite.emoji)}
                className="flex flex-col items-center justify-center cursor-pointer group-hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2 select-none">{favorite.emoji}</div>
                <p className="text-xs text-gray-600 text-center line-clamp-2">
                  {favorite.name}
                </p>
              </div>
              
              <button
                onClick={() => handleRemoveFavorite(favorite.unicode)}
                className="absolute top-1 right-1 p-1 rounded-full bg-red-100 hover:bg-red-200 transition-colors opacity-0 group-hover:opacity-100"
                title={t("removeFromFavorites")}
              >
                <Heart className="w-3 h-3 text-red-500 fill-current" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 