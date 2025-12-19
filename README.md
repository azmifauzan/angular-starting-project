# StartingProject

A compact Angular 21 training project with a hero header and a random user showcase, built with standalone components and the new signal-based APIs.

## Features

- **Hero header**: `app-header` renders the logo, title, and positioning copy so the page feels like a task-management hero banner.
- **Random user showcase**: `app-user` picks a random entry from `src/app/class/dummy-users.ts` every time you click the button, updating the avatar and name from the static `/public/users` assets.
- **Signals for state**: The sample uses `signal` to keep the selected user reactive without a full component store.

## Tech stack

- Angular 21 standalone components
- TypeScript ~5.9
- Vitest for unit tests
- RxJS for future reactive helpers

## Getting started

### Requirements

- Node.js 20+ (the project is configured with npm 11.5.1 for package management).

### Install dependencies

```bash
npm install
```

### Common scripts

- `npm start` – launch the development server on http://localhost:4200 with automatic reload.
- `npm run build` – produce a production build in `dist/`.
- `npm run watch` – rebuild continuously using the development configuration.
- `npm test` – run the Vitest suite (future-friendly replacement for Karma).

## Project layout

- `src/app/app.ts` loads `Header` and `User` as standalone components and exposes the title signal used in `app.html`.
- `src/app/component/header/*` contains the hero markup, styles, and specs.
- `src/app/component/user/*` handles the random user picker and binds the avatar along with the click handler.
- `src/app/class/dummy-users.ts` provides the hard-coded user data referenced by `app-user`.

## Assets

- `public/task-management-logo.png` is used inside the header component.
- `public/users/user-*.jpg` are the avatars that `app-user` cycles through.

## Learn more

- Angular CLI docs: https://angular.dev/cli
- Vitest documentation: https://vitest.dev
