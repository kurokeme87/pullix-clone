import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { WagmiProvider } from "wagmi";
// import { Web3Modal } from "@web3modal/react";
// import { config } from "../config";
// import { chains, providers } from "@web3modal/ethereum";
// import { QueryClient } from "@tanstack/react-query";
import { Web3Provider } from "../providers/wagmi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pullix",
  description: "Pullix is an innovative staking platform equipped with advanced trading tools. Leveraging state-of-the-art technology and blockchain",
keywords : "pullix , pullix staking , pullix crypto",
};

// const modalConfig = {
//   theme: "dark",
//   accentColor: "default",
//   ethereum: {
//     appName: "Pullix",
//     chains: [chains.goerli, chains.polygonMumbai],
//     providers: [],
//     autoConnect: true,
//   },
//   projectId: "",
// };

// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
