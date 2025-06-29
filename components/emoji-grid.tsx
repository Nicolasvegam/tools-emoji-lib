"use client";

import { Emoji } from "@/lib/emoji-data";
import { EmojiCard } from "./emoji-card";

interface EmojiGridProps {
  emojis: Emoji[];
}

export function EmojiGrid({ emojis }: EmojiGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4 md:gap-6">
      {emojis.map((emoji, index) => (
        <div
          key={emoji.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both'
          }}
        >
          <EmojiCard emoji={emoji} />
        </div>
      ))}
    </div>
  );
}