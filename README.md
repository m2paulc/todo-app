This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Install Prisma

```bash
npm install prisma --save-dev
```

- setup Prisma ORM project

  ```bash
  npx prisma init
  ```

- connect your database

```javascript
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

- create a model

```javascript
model Todo {
  id        String   @id @default(uuid())
  task      String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

- run the migration command for Prisma

```bash
npx prisma migrate dev --name init
```
