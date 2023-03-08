# Project : NextJS Netflix App

NextJS Netflix App is a responsive web application where you can watch the trailer of the movie you want to see the information of after registering and logging in and you can create a watch list for yourself by pressing the + button.

## Table of contents

- [Project : NextJS Netflix App](#project--nextjs-netflix-app)
  - [Table of contents](#table-of-contents)
  - [The challenge](#the-challenge)
  - [Project Skeleton](#project-skeleton)
  - [Screenshot](#screenshot)
  - [Links](#links)
    - [Built with](#built-with)
    - [Useful resources](#useful-resources)
  - [Installation](#installation)
  - [Author](#author)
  - [Contact](#contact)
  - [How to use](#how-to-use)

## The challenge

To create an advanced movie app with ReactJS, NextJS, TypeScript, Firebase, Firestore and TailwindCSS

## Project Skeleton

```


|----README.md
├── atoms
│       └── modalAtom.ts
├── components
│       ├── Banner.tsx
│       ├── BasicMenu.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Loader.tsx
│       ├── Membership.tsx
│       ├── Modal.tsx
│       ├── Row.tsx
│       └── Thumbnail.tsx
├── constants
│       ├── apiKey.ts
│       └── movie.ts
├── firebase
│       └──  firebase.ts
├── hooks
│       ├── useAuth.tsx
│       └── useList.js
├── pages
│       ├── api
|       |     └── hello.js
│       ├── _app.jsx
│       ├── account.jsx
│       ├── index.jsx
│       └── login.jsx
├── public
│       ├── favicon.ico
│       └── vercel.svg
├── styles
│       └── global.css
├── utils
│       └── requests.ts
├── next.config.js
├── .env
├── package-lock.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── typing.d.ts
```

## Links

<hr>
<b>Check The Live Website ➡️</b> <a href="https://netflix-nextjs-fire-base-ouzp4j5av-oussama-fajraoui.vercel.app/login">Live Website</a>
<hr>

### Built with

- React Components, Props, States and Hooks
- TypeScript
- NextJS
- API GET,POST,DELETE and UPDATE requests
- Context API
- React Recoil
- React Player
- React Hot Tost
- React Hook Form
- JSX Elements
- TailwindCSS
- Material UI
- Firebase Auth
- Firestore Database

### Useful resources

- [W3 Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [Firebase](https://firebase.google.com/)
- [TMDB](https://www.themoviedb.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Installation

Use the Npm package manager install command.

```bash
npm install
```

---

## Author

- Author - [Oussama Fajraoui]

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```
