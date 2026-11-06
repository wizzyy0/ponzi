"use client";

import { useSyncExternalStore } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isNeonEnabled, setNeon, subscribeNeon } from "@/lib/neon-store";

const emptySubscribe = () => () => {};

export function NeonToggle() {
  const neon = useSyncExternalStore(subscribeNeon, isNeonEnabled, () => true);

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
        aria-label="Переключить неон-режим"
        className="rounded-full border-border/60"
      >
        <Sparkles className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={
        neon
          ? "Выключить неон — строгий чёрно-белый режим"
          : "Включить неон-режим"
      }
      title={neon ? "Выключить неон (строгий режим)" : "Включить неон"}
      onClick={() => setNeon(!neon)}
      className="rounded-full border-border/60 bg-background/60 backdrop-blur transition-all hover:border-neon-purple/60 hover:shadow-[0_0_18px_-4px_var(--neon-purple)]"
    >
      <Sparkles
        className={
          neon
            ? "h-5 w-5 text-neon-purple drop-shadow-[0_0_6px_var(--neon-purple)]"
            : "h-5 w-5 text-muted-foreground opacity-70"
        }
      />
    </Button>
  );
}
