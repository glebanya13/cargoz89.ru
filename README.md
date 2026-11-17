# Z89 CARGO — pixel-perfect-pixels

Лендинг «Доставка грузов из Китая в Россию». Одностраничный сайт на
TanStack Start + Tailwind CSS, собирается в полностью статический HTML.

## Разработка

Нужен [Bun](https://bun.sh) (или Node.js 20+ с npm).

```sh
bun install
bun run dev
```

## Сборка

```sh
bun run build
```

Статика складывается в `dist/client`: все маршруты пререндерятся в HTML на
этапе сборки, серверная часть не нужна.

## Деплой на Firebase Hosting

```sh
bun run deploy
```

Скрипт собирает статику и выкладывает её из `dist/client` на Firebase Hosting
(конфиг в `firebase.json`, проект — в `.firebaserc`). Перед первым деплоем
выполни `firebase login` и укажи свой проект в `.firebaserc`.
