"use client";

import { socials } from "@/lib/rules-data";
import {
  DiscordIcon,
  TwitchIcon,
  TelegramIcon,
  YoutubeIcon,
  socialColors,
} from "@/components/brand-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const icons = {
  youtube: YoutubeIcon,
  twitch: TwitchIcon,
  telegram: TelegramIcon,
  discord: DiscordIcon,
} as const;

export function SocialCircle({ id, label, url }: { id: keyof typeof icons; label: string; url: string }) {
  const Icon = icons[id];
  const c = socialColors[id];
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`social-circle flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur-md ${c.bg} ${c.glow} ${c.text}`}
        >
          <Icon className="h-5 w-5" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="text-xs">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

/** Фиксированный вертикальный рейл кружочков справа (desktop). */
export function SocialRail() {
  return (
    <TooltipProvider delayDuration={100}>
      <nav
        aria-label="Соц-сети стримера"
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      >
        {socials.map((s) => (
          <SocialCircle key={s.id} id={s.id} label={s.label} url={s.url} />
        ))}
      </nav>
    </TooltipProvider>
  );
}

/** Горизонтальный ряд кружочков для мобильных. */
export function SocialRow() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-wrap justify-center gap-3 lg:hidden">
        {socials.map((s) => (
          <SocialCircle key={s.id} id={s.id} label={s.label} url={s.url} />
        ))}
      </div>
    </TooltipProvider>
  );
}
