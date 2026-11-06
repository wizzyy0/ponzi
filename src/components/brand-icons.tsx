import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

export function TwitchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.57 4.71h1.71v5.14h-1.71V4.71Zm-4.71 0h1.71v5.14H6.86V4.71ZM4.28 2 3 5.57v12.86h4V21h2.29l2.28-2.57h3.43L21 12V2H4.28Zm14.86 9.14-2.85 3.29h-4.29l-2.28 2.29v-2.29H6V3.71h13.14v7.43Z" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.91 3.79 20.3 20.84c-.25 1.21-.98 1.5-1.99.94l-5.5-4.07-2.66 2.57c-.3.3-.55.55-1.1.55l.4-5.61 10.25-9.26c.45-.4-.1-.62-.68-.22L6.32 13.21l-5.4-1.7c-1.18-.36-1.2-1.18.25-1.74l21.1-8.14c.98-.36 1.84.22 1.64 2.16Z" />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.5 0 12.6 12.6 0 0 0-.61-1.25.07.07 0 0 0-.08-.04 19.74 19.74 0 0 0-4.88 1.52.06.06 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06c0 .02.01.04.03.05a19.9 19.9 0 0 0 6 3.03.07.07 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.07.07 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.07.07 0 0 1-.01-.11c.13-.1.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.25.2.37.29a.07.07 0 0 1-.01.12c-.6.35-1.22.64-1.87.89a.07.07 0 0 0-.04.1c.36.7.77 1.37 1.22 2a.07.07 0 0 0 .08.03 19.84 19.84 0 0 0 6.02-3.03.07.07 0 0 0 .03-.05c.5-5.18-.84-9.68-3.55-13.66a.05.05 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42s.95-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z" />
    </svg>
  );
}

export const socialColors: Record<
  string,
  { bg: string; glow: string; text: string }
> = {
  youtube: {
    bg: "hover:bg-[#FF0000] hover:border-[#FF0000]",
    glow: "hover:shadow-[0_0_24px_-4px_#FF0000cc]",
    text: "hover:text-white",
  },
  twitch: {
    bg: "hover:bg-[#9146FF] hover:border-[#9146FF]",
    glow: "hover:shadow-[0_0_24px_-4px_#9146FFcc]",
    text: "hover:text-white",
  },
  telegram: {
    bg: "hover:bg-[#229ED9] hover:border-[#229ED9]",
    glow: "hover:shadow-[0_0_24px_-4px_#229ED9cc]",
    text: "hover:text-white",
  },
  discord: {
    bg: "hover:bg-[#5865F2] hover:border-[#5865F2]",
    glow: "hover:shadow-[0_0_24px_-4px_#5865F2cc]",
    text: "hover:text-white",
  },
};
