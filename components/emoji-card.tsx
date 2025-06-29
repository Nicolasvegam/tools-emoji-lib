"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Emoji } from "@/lib/emoji-data";
import { copyToClipboard } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

interface EmojiCardProps {
  emoji: Emoji;
}

export function EmojiCard({ emoji }: EmojiCardProps) {
  const [copying, setCopying] = useState(false);
  const t = useTranslations("common");
  const params = useParams();
  const locale = params.locale as string;

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

  return (
    <Link
      href={`/${locale}/emoji/${emoji.slug[locale as keyof typeof emoji.slug]}`}
      className="group relative"
    >
      <div
        onClick={handleCopy}
        className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group-hover:scale-105"
      >
        <div className="text-6xl mb-2 select-none">{emoji.emoji}</div>
        <p className="text-sm text-gray-600 text-center line-clamp-1">
          {emoji.name[locale as keyof typeof emoji.name]}
        </p>
      </div>
      {copying && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
          <span className="text-sm font-medium text-blue-600">{t("copied")}</span>
        </div>
      )}
    </Link>
  );
}