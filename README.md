## Getting Started

First, run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Node Version

Built on Node v20.10.0 also specified in .nvmrc, just run ``nvm use` to switch to it.

## Libraries:

-   eslint - linter
-   prettier - formatter
-   vitest - unit/integration test runner
-   cypress - end-to-end testing library
-   lint-staged - lint staged files
-   husky - git hooks
-   zustand - minimal, unopinionated state management library
-   simple-zustand-devtools - zustand devtools
-   axios - promise based HTTP client for the browser and node.js
-   axios-cache-interceptor - axios interceptor to cache GET requests
-   d3 - data visualization library
-   nivo - ready-mades for d3
-   framer-motion - react-specific animation library
-   mapbox-gl - map library
-   nodemailer - email sending library
-   react-gtm-module - google tag manager library
-   react-hook-form - form library
-   zod - schema validation library
-   swr - simple data fetching library
-   stitches - css-in-js library (avoids page transition issues in next.js found in styled-components or scss)

## Scripts:

### Next:

-   dev - start dev server with turbopack (still in beta)
-   dev:webpack - start dev server with webpack
-   build - build project
-   start - start project

### Eslint:

-   lint - lint project
-   lint:fix - lint project and fix errors

### Prettier:

-   format - format project
-   format:check - check if project is formatted

### Vitest (unit and integration tests):

-   test - run tests
-   test:watch - run tests in watch mode
-   test:coverage - run tests with coverage
-   test:ci - run tests in ci mode
-   test:ci:coverage - run tests with coverage in ci mode

### Cypress (e2e tests):

-   test:e2e - run e2e tests
-   test:e2e:ci - run e2e tests in ci mode
-   test:e2e:ci:record - run e2e tests in ci mode and record them

### Husky:
-  prepare - install husky hooks
