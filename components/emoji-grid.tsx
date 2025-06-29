"use client";

import { Emoji } from "@/lib/emoji-data";
import { EmojiCard } from "./emoji-card";

interface EmojiGridProps {
  emojis: Emoji[];
}

export function EmojiGrid({ emojis }: EmojiGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.id} emoji={emoji} />
      ))}
    </div>
  );
}