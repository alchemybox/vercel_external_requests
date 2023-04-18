This is a minimal reproducible example for a Vercel issue **Fetch Requests don't always send**.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Examples

- **One fetch request** ([/api/test/one_request](http://localhost:3000/api/test/one_request)) : One fetch request is sent to an external service when a get request is made. This works locally and is flakey when deployed.
- **Multiple fetch requests** ([/api/test/many_requests](http://localhost:3000/api/test/many_requests)) : Many fetch requests are sent to an external service when a get request is made. This works locally and is flakey when deployed.
- **Fetch requests in a loop** ([/api/test/loop_request](http://localhost:3000/api/test/loop_request)) : Fetch requests are made within a loop and is sent to an external service when a get request is made. This works locally and does not work when deployed.
