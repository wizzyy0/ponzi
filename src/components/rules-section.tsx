"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ban,
  ChevronDown,
  Clock3,
  Gavel,
  HelpCircle,
  Mic,
  Scale,
  Twitch as TwitchBrand,
  Youtube as YoutubeBrand,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  youtubeRules,
  twitchRules,
  voiceRules,
  voiceNotice,
  voicePostscripts,
  voiceAdminRights,
  punishmentKind,
  type PunishmentKind,
  type Rule,
} from "@/lib/rules-data";

const kindMeta: Record<
  PunishmentKind,
  { label: string; className: string; icon: React.ElementType }
> = {
  mute: {
    label: "Мут",
    className:
      "bg-neon-orange/15 text-neon-orange border-neon-orange/40 dark:bg-neon-orange/10",
    icon: Clock3,
  },
  ban: {
    label: "Бан",
    className:
      "bg-destructive/15 text-destructive border-destructive/50 dark:bg-destructive/10",
    icon: Ban,
  },
  moderator: {
    label: "На усмотрение модератора",
    className: "bg-muted text-muted-foreground border-border",
    icon: Scale,
  },
  unknown: {
    label: "Наказание не указано",
    className: "bg-neon-pink/15 text-neon-pink border-neon-pink/40 dark:bg-neon-pink/10",
    icon: HelpCircle,
  },
};

function PunishmentBadge({ punishment }: { punishment: string | undefined }) {
  const kind = punishmentKind(punishment);
  const meta = kindMeta[kind];
  const Icon = meta.icon;
  const text = kind === "unknown" ? punishment ?? "???" : punishment ?? "???";
  return (
    <Badge
      variant="outline"
      data-kind={kind}
      className={`kind-badge gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${meta.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>Наказание: {text}</span>
    </Badge>
  );
}

function RuleCard({ rule, index }: { rule: Rule; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
      className="neon-card flex flex-col gap-4 rounded-2xl border bg-card p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span className="font-display mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neon-purple/40 bg-neon-purple/10 text-base text-neon-purple dark:text-neon-pink">
          {rule.n}
        </span>
        <p className="leading-relaxed text-[15px] text-card-foreground">{rule.text}</p>
      </div>
      <div className="mt-auto pl-0 sm:pl-14">
        <PunishmentBadge punishment={rule.punishment} />
      </div>
    </motion.article>
  );
}

const rulesIntro: Record<string, string> = {
  twitch:
    "Полный перечень правил, которым должны следовать зрители на Twitch-канале. Изложение чёткое и понятное.",
  youtube:
    "Основные правила поведения, которые должны соблюдать подписчики YouTube канала, чтобы создать дружелюбную атмосферу и поддерживать положительное взаимодействие.",
  voice: "Основные правила взаимодействия в голосовом чате для подписчиков канала.",
};

function TwitchTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {twitchRules.map((r, i) => (
        <RuleCard key={r.n} rule={r} index={i} />
      ))}
    </div>
  );
}

function YoutubeTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {youtubeRules.map((r, i) => (
        <RuleCard key={r.n} rule={r} index={i} />
      ))}
    </div>
  );
}

function VoiceTab() {
  const [rightsOpen, setRightsOpen] = useState(true);
  return (
    <div className="flex flex-col gap-6">
      {/* Жирная плашка-уведомление */}
      <div className="voice-notice rounded-2xl border border-neon-pink/40 bg-neon-pink/10 px-5 py-4 text-sm font-semibold text-foreground sm:text-base">
        {voiceNotice}
      </div>

      {/* Правила войса списком с номерами */}
      <ol className="flex flex-col gap-3">
        {voiceRules.map((r, i) => (
          <motion.li
            key={r.n}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.35) }}
            className="neon-card flex items-start gap-4 rounded-2xl border bg-card p-4 sm:p-5"
          >
            <span className="font-display mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neon-pink/40 bg-neon-pink/10 text-sm text-neon-pink">
              {r.n}
            </span>
            <p className="leading-relaxed text-[15px]">{r.text}</p>
          </motion.li>
        ))}
      </ol>

      {/* P.S. карточки */}
      <div className="grid gap-4 md:grid-cols-3">
        {voicePostscripts.map((ps) => (
          <div
            key={ps.label}
            className="neon-card rounded-2xl border border-neon-purple/30 bg-card p-5"
          >
            <p className="font-display text-sm text-neon-purple dark:text-neon-pink">
              {ps.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ps.text}</p>
          </div>
        ))}
      </div>

      {/* Права администрации (аккордеон) */}
      <div className="rounded-2xl border bg-card">
        <button
          type="button"
          onClick={() => setRightsOpen((v) => !v)}
          aria-expanded={rightsOpen}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="font-display flex items-center gap-2 text-base">
            <Gavel className="h-4.5 w-4.5 text-neon-purple" />
            Права администрации
          </span>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
              rightsOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence initial={false}>
          {rightsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="grid gap-4 border-t px-5 py-5 md:grid-cols-2">
                {voiceAdminRights.map((item) => (
                  <div key={item.title} className="rounded-xl bg-muted/50 p-4">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const tabMeta = {
  twitch: { label: "Twitch", icon: TwitchBrand, count: `${twitchRules.length} правил` },
  youtube: { label: "YouTube", icon: YoutubeBrand, count: `${youtubeRules.length} правил` },
  voice: { label: "Войс", icon: Mic, count: `${voiceRules.length} правил` },
} as const;

export function RulesSection() {
  const [tab, setTab] = useState<"twitch" | "youtube" | "voice">("twitch");

  return (
    <section id="rules" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
        <div className="flex justify-center">
          <TabsList className="h-auto gap-1 rounded-full border border-border/70 bg-card/80 p-1.5 backdrop-blur sm:gap-2">
            {(Object.keys(tabMeta) as Array<keyof typeof tabMeta>).map((key) => {
              const meta = tabMeta[key];
              const Icon = meta.icon;
              const active = tab === key;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-6 ${
                    active
                      ? "tab-active bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-[0_0_20px_-6px_var(--neon-purple)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{meta.label}</span>
                  <span className="sm:hidden">{meta.label}</span>
                  <span
                    className={`tab-count ml-1 hidden rounded-full px-2 py-0.5 text-[10px] font-bold md:inline ${
                      active ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {meta.count}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          {rulesIntro[tab]}
        </p>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab === "twitch" && <TwitchTab />}
              {tab === "youtube" && <YoutubeTab />}
              {tab === "voice" && <VoiceTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
