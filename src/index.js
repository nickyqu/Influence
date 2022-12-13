import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//rainbow wallet
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider , lightTheme} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const root = ReactDOM.createRoot(document.getElementById("root"));

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [
    alchemyProvider({ apiKey: "_Sh7nSMIHg5SSrr8gszB6ne5zjnXV0yH" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Influence",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={lightTheme({
            accentColor: "#ff7235",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
