/**
 * Глобальное состояние «неон-режима».
 *
 * Неон включён  -> на <html> НЕТ атрибута data-neon.
 * Неон выключен -> на <html> стоит data-neon="off" (строгий чёрно-белый режим).
 *
 * Значение переживает перезагрузку через localStorage (ключ "ponzi-neon"),
 * а атрибут на <html> выставляет инлайн-скрипт в layout.tsx до первой отрисовки,
 * чтобы не было мигания неона у тех, кто выбрал строгий режим.
 */

const STORAGE_KEY = "ponzi-neon";

type Listener = () => void;

const listeners = new Set<Listener>();

/** Актуальное состояние (клиент): true = неон, false = строгий ч/б режим. */
export function isNeonEnabled(): boolean {
  if (typeof document === "undefined") return true;
  return document.documentElement.dataset.neon !== "off";
}

function applyToDocument(on: boolean): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (on) {
    delete root.dataset.neon;
  } else {
    root.dataset.neon = "off";
  }
  try {
    localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
  } catch {
    // Приватный режим / запрет localStorage — просто живём без сохранения.
  }
}

/** Переключить неон-режим (обновляет DOM и уведомляет подписчиков). */
export function setNeon(on: boolean): void {
  applyToDocument(on);
  listeners.forEach((listener) => listener());
}

export function subscribeNeon(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Синхронизация между вкладками браузера. */
if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    applyToDocument(event.newValue !== "off");
    listeners.forEach((listener) => listener());
  });
}
