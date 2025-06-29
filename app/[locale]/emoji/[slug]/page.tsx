import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getEmojiBySlug, getAllEmojis, searchEmojis } from "@/lib/emoji-data";
import { EmojiDetail } from "@/components/emoji-detail";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const emoji = getEmojiBySlug(slug, locale);
  
  if (!emoji) {
    return {
      title: "Emoji not found",
    };
  }

  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("emojiTitle", {
    emoji: emoji.emoji,
    name: emoji.name[locale as keyof typeof emoji.name],
  });
  const description = t("emojiDescription", {
    emoji: emoji.emoji,
    name: emoji.name[locale as keyof typeof emoji.name],
    unicode: emoji.unicode,
  });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "es", "zh", "hi", "ar", "pt"];
  const emojis = getAllEmojis();
  
  const params = [];
  for (const locale of locales) {
    for (const emoji of emojis) {
      params.push({
        locale,
        slug: emoji.slug[locale as keyof typeof emoji.slug],
      });
    }
  }
  
  return params;
}

export default async function EmojiPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const emoji = getEmojiBySlug(slug, locale);

  if (!emoji) {
    notFound();
  }

  const relatedEmojis = searchEmojis(
    emoji.keywords[locale as keyof typeof emoji.keywords][0] || "",
    locale
  ).filter((e) => e.id !== emoji.id).slice(0, 8);

  return <EmojiDetail emoji={emoji} relatedEmojis={relatedEmojis} locale={locale} />;
}