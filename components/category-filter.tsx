"use client";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categories = [
  { id: null, name: "All", icon: "🌟", color: "from-yellow-400 to-orange-500" },
  { id: "smileys", name: "Smileys", icon: "😊", color: "from-yellow-400 to-pink-500" },
  { id: "gestures", name: "Gestures", icon: "👋", color: "from-blue-400 to-purple-500" },
  { id: "objects", name: "Objects", icon: "💡", color: "from-green-400 to-blue-500" },
  { id: "nature", name: "Nature", icon: "🌺", color: "from-green-400 to-emerald-500" },
  { id: "food", name: "Food", icon: "🍕", color: "from-red-400 to-orange-500" },
  { id: "activities", name: "Activities", icon: "⚽", color: "from-purple-400 to-pink-500" },
  { id: "travel", name: "Travel", icon: "✈️", color: "from-indigo-400 to-blue-500" },
  { id: "symbols", name: "Symbols", icon: "💕", color: "from-pink-400 to-red-500" },
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {

  return (
    <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
      {categories.map((category) => (
        <button
          key={category.id || 'all'}
          onClick={() => onCategoryChange(category.id)}
          className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            selectedCategory === category.id
              ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
              : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border-2 border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </div>
          
          {/* Hover effect */}
          {selectedCategory !== category.id && (
            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
          )}
          
          {/* Active indicator */}
          {selectedCategory === category.id && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
          )}
        </button>
      ))}
    </div>
  );
}