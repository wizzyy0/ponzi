"use client";

import { motion } from "framer-motion";
import { Gamepad2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NeonToggle } from "@/components/neon-toggle";
import { SocialRail, SocialRow } from "@/components/social-rail";
import { RulesSection } from "@/components/rules-section";
import { AdminsSection } from "@/components/admins";
import { socials, twitchRules, youtubeRules, voiceRules } from "@/lib/rules-data";

export default function Home() {
  const scrollToRules = () => {
    document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {/* Фоновое неон-свечение + сетка */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="neon-grid-bg absolute inset-0" />
        <div className="hero-blob absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-neon-purple/25 blur-[110px] dark:bg-neon-purple/30" />
        <div className="hero-blob absolute -left-24 top-64 h-64 w-64 rounded-full bg-neon-pink/20 blur-[100px]" />
        <div className="hero-blob absolute -right-24 top-96 h-64 w-64 rounded-full bg-neon-purple/20 blur-[100px]" />
      </div>

      {/* Соц-сети кружочками справа */}
      <SocialRail />

      {/* Хедер */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="font-display flex items-center gap-2 text-lg">
            <span className="logo-badge flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink text-white shadow-[0_0_18px_-4px_var(--neon-purple)]">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <span>
              <span className="text-gradient">PONZI</span>{" "}
              <span className="text-foreground">RULES</span>
            </span>
          </a>
          <nav aria-label="Основная навигация" className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToRules}
              className="hidden rounded-full text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Правила
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById("admins")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden rounded-full text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Администрация
            </Button>
            <NeonToggle />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 pb-16">
        {/* Герой */}
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-14 text-center sm:px-6 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="mb-4 flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-4 py-1.5 text-xs font-medium text-neon-purple dark:text-neon-pink">
              <ShieldCheck className="h-3.5 w-3.5" />
              Официальные правила канала
            </span>
            <h1 className="font-display text-4xl leading-tight sm:text-6xl">
              <span className="text-gradient neon-glow">ПРАВИЛА</span>
              <br />
              <span className="text-foreground">КАНАЛА </span>
              <span className="text-gradient neon-glow">PONZI</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Всё, что нужно знать зрителю: правила чата на Twitch и YouTube, порядок в голосовом
              чате и наказания за нарушения. Читай, чтобы не попасть на мут.
            </p>

            {/* Мобильный ряд соц-сетей кружочками */}
            <div className="mt-6">
              <SocialRow />
            </div>

            {/* Статистика */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Twitch", count: twitchRules.length },
                { label: "YouTube", count: youtubeRules.length },
                { label: "Войс", count: voiceRules.length },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm backdrop-blur"
                >
                  <span className="font-display text-gradient text-lg">{s.count}</span>
                  <span className="text-muted-foreground">правил — {s.label}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={scrollToRules}
              className="cta-button mt-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink px-8 text-base font-semibold text-white shadow-[0_0_28px_-6px_var(--neon-purple)] transition-transform hover:scale-[1.03]"
            >
              Читать правила
            </Button>
          </motion.div>
        </section>

        {/* Правила: вкладки */}
        <div className="mt-14 sm:mt-16">
          <RulesSection />
        </div>

        {/* Администрация */}
        <div className="mt-16 sm:mt-20">
          <AdminsSection />
        </div>
      </main>

      {/* Футер */}
      <footer className="mt-auto border-t border-border/60 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="font-display text-sm">
            <span className="text-gradient">PONZI</span> <span className="text-muted-foreground">RULES</span>
          </p>
          <nav aria-label="Соц-сети" className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-neon-purple dark:hover:text-neon-pink"
              >
                {s.label.split(" ")[0]}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ponzi Rules. Соблюдай правила — и всё будет ок.
          </p>
        </div>
      </footer>
    </div>
  );
}
