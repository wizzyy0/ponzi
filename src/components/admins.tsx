"use client";

import { motion } from "framer-motion";
import { admins } from "@/lib/rules-data";
import { TelegramIcon } from "@/components/brand-icons";

const roleStyles: Record<string, string> = {
  OWNER: "border-transparent bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-[0_0_16px_-4px_var(--neon-purple)]",
  "H.ADMIN": "border-neon-purple/50 bg-neon-purple/15 text-neon-purple dark:text-neon-pink",
  CURATOR: "border-neon-pink/50 bg-neon-pink/15 text-neon-pink",
  "CO.CURATOR": "border-border bg-muted text-muted-foreground",
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AdminsSection() {
  return (
    <section id="admins" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div className="text-center">
        <h2 className="font-display text-2xl sm:text-3xl">
          <span className="text-gradient neon-glow">Администрация канала</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Ниже указаны администраторы, следящие за порядком
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {admins.map((admin, i) => (
          <motion.a
            key={admin.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            href={admin.telegram ? `https://t.me/${admin.telegram}` : undefined}
            target={admin.telegram ? "_blank" : undefined}
            rel={admin.telegram ? "noopener noreferrer" : undefined}
            aria-label={
              admin.telegram ? `Открыть Telegram ${admin.name}` : undefined
            }
            title={
              admin.telegram ? `Написать ${admin.name} в Telegram` : undefined
            }
            className={`neon-card group relative flex flex-col items-center gap-3 rounded-2xl border bg-card p-5 text-center ${
              admin.telegram ? "cursor-pointer" : ""
            }`}
          >
            {admin.telegram && (
              <TelegramIcon
                className="absolute top-3 right-3 h-4 w-4 text-muted-foreground opacity-40 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
            <div
              className={`admin-avatar font-display flex h-14 w-14 items-center justify-center rounded-full text-lg text-white ${
                admin.role === "OWNER"
                  ? "is-owner bg-gradient-to-br from-neon-purple to-neon-pink shadow-[0_0_22px_-4px_var(--neon-purple)]"
                  : "bg-gradient-to-br from-neon-purple/80 to-neon-pink/80"
              }`}
              aria-hidden="true"
            >
              {initials(admin.name)}
            </div>
            <p className="text-sm font-semibold leading-tight">{admin.name}</p>
            <span
              data-role={admin.role}
              className={`role-badge rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest ${
                roleStyles[admin.role] ?? roleStyles["CO.CURATOR"]
              }`}
            >
              {admin.role}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
