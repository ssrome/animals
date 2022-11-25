[![CI/CD Production](https://github.com/ssrome/animals/actions/workflows/production.yml/badge.svg)](https://github.com/ssrome/animals/actions/workflows/production.yml)

# Animals

## Technologies used

- [Next.js](https://nextjs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)

## Deployed using

- [GitHub Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com/)

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

1. Clone the repo

```
git clone https://github.com/ssrome/animals.git
```

2. Install packages into the `animal` directory

```
npm install
```

## Run application

### Run locally

```
npm run dev
```

Then go to [http://localhost:3000](http://localhost:3000)

### Run Tests

To run unit tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

```
npm run test:unit
```

To run the end to end tests using [Cypress](https://www.cypress.io/)

```
npm run test:e2e
```
