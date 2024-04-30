# SideDish embed demo

This is a demo project that showcases how to embed SideDish store into your application. You can find the live demo at [https://demo-sidedish-store.vercel.app](https://demo-sidedish-store.vercel.app). See the [official documentation](https://sidedish.mintlify.app/introduction) for more details.

## Running it locally

1. Clone the repository

```bash
git clone git@github.com:sidedishdev/demo.git
```

2. Install dependencies

```bash
npm i
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## About the demo

This project is built with [NextJS](https://nextjs.org) and uses [SideDish React package](https://www.npmjs.com/package/@sidedish/react). By default, demo works with [Demo store](https://demo.integrations.store). To change the domain to your own store, set `NEXT_PUBLIC_STORE_URL` environment variable (you can use NextJS `.env` file).
