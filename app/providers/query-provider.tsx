"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import React from "react";

const AppQueryProvider = ({ children }: PropsWithChildren) => {
  // NOTE: Avoid useState when initializing the query client if you don't have a suspense boundary between this and the
  // code that may suspend because React will throw away the client on the initial render if it suspends and there is no boundary
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryProvider;
