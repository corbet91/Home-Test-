import { PropsWithChildren } from "react";
import AppQueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";

const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AppQueryProvider>{children}</AppQueryProvider>
    </ThemeProvider>
  );
};

export default Providers;
