# PONZI RULES — сайт правил канала

Сайт с правилами стримера **Ponzi**: правила чата Twitch (13), правила YouTube-канала (12)
и правила голосового чата (14 + P.S.). Плюс состав администрации и ссылки на соц-сети
стримера (YouTube, Twitch, Telegram, Discord — кружочки справа).

## Стек

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui
- framer-motion (анимации), next-themes (тёмная/светлая тема)

## Локальный запуск

```bash
bun install        # или npm install
bun run dev        # сайт на http://localhost:3000
```

## Сборка

```bash
bun run build          # обычная сборка
bun run build:pages    # статический экспорт для GitHub Pages (папка out/, basePath /ponzi)
```

## Деплой на GitHub Pages

Работает автоматически: при пуше в `main` запускается
`.github/workflows/deploy-pages.yml` — сайт собирается и публикуется на
`https://<user>.github.io/ponzi/`. Если Pages ещё не включён, включи один раз:
**Settings → Pages → Source: GitHub Actions**.

## Где лежат данные

Все правила, админы и соц-ссылки — в одном файле: `src/lib/rules-data.ts`.
Правки текстов вносятся только там, вёрстка подхватит автоматически.
