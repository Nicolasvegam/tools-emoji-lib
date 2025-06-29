export interface FavoriteEmoji {
  emoji: string;
  name: string;
  unicode: string;
  slug: string;
  addedAt: number;
}

const FAVORITES_KEY = 'emoji-favorites';

export function getFavorites(): FavoriteEmoji[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addToFavorites(emoji: FavoriteEmoji): void {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    const exists = favorites.some(fav => fav.unicode === emoji.unicode);
    
    if (!exists) {
      favorites.push(emoji);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Failed to add to favorites:', error);
  }
}

export function removeFromFavorites(unicode: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const favorites = getFavorites();
    const filtered = favorites.filter(fav => fav.unicode !== unicode);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Failed to remove from favorites:', error);
  }
}

export function isFavorite(unicode: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const favorites = getFavorites();
    return favorites.some(fav => fav.unicode === unicode);
  } catch {
    return false;
  }
}

export function clearFavorites(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.error('Failed to clear favorites:', error);
  }
} 