# How to run

- Clone the repository
- Install all packages by using `pnpm i` command
- Add the following env variable in your `.env.local`

  ```sh
  API_URL=http://localhost:3001
  ```

- Run the following commands

  ```sh
  # To start json server
  pnpm run server

  # To start development server
  pnpm run dev
  ```

## Project Structure

```txt
.
├── app (for routing)
├── components (for reusable components)
│ ├── ui
│ └── Others
├── config (configurations)
├── features (not reusable)
│ └── feature01/
│ ├── components
│ ├── hooks
│ └── Feature.tsx
├── lib (utils, types)
│ ├── types.ts
│ └── utils/
│ └── products.ts
└── store (zustand store)
```

## Project Architecture

[Click Here](./project-architecture.md)
