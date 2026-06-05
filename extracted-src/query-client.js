import { QueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ee36527e";


export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});