"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // Гидрационно-безопасная проверка, что компонент на клиенте
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Сменить тему"
        className="rounded-full border-border/60"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      title={isDark ? "Светлая тема" : "Тёмная тема"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border-border/60 bg-background/60 backdrop-blur transition-all hover:border-neon-purple/60 hover:shadow-[0_0_18px_-4px_var(--neon-purple)]"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-neon-orange transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-neon-purple" />
      )}
    </Button>
  );
}
