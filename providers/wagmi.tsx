"use client";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, type WagmiProviderProps } from "wagmi";

import { config } from "../config";

const { Button, Spinner, Modal, Card } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Spinner,
    Card,
    Modal,
  },
});

const queryClient = new QueryClient();

export function WagmiContextProvider({ children, initialState }: any) {
  return (
    <WagmiProvider config={config}>
      <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraBaseProvider>
    </WagmiProvider>
  );
}
