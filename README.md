# Animal Server

A production-ready Express.js + TypeScript backend with PostgreSQL and PostGraphile.

## Features

*   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **PostgreSQL:** A powerful, open source object-relational database system.
*   **PostGraphile:** Instantly create a GraphQL API from a PostgreSQL schema.
*   **Docker:** A platform for developing, shipping, and running applications in containers.
*   **ESLint & Prettier:** For code quality and consistent formatting.
*   **Vitest:** A blazing fast unit-test framework.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v16 or later)
*   [Docker](https://www.docker.com/get-started)
*   [npm](https://www.npmjs.com/get-npm)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/animal-server.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Start the database:

    ```bash
    npm run db:up
    ```

4.  Run the migrations:

    ```bash
    npm run migrate
    ```

5.  Seed the database:

    ```bash
    npm run db:seed
    ```

6.  Start the development server:

    ```bash
    npm run dev
    ```

The API will be available at `http://localhost:3000`. The GraphQL endpoint will be available at `http://localhost:3000/graphql`.

## Available Scripts

*   `npm run dev`: Starts the development server with hot-reloading.
*   `npm run build`: Compiles the TypeScript code to JavaScript.
*   `npm run start`: Starts the production server.
*   `npm run db:up`: Starts the PostgreSQL database in a Docker container.
*   `npm run migrate`: Runs the database migrations.
*   `npm run db:seed`: Seeds the database with initial data.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run test`: Runs the tests using Vitest.
