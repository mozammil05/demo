/// <reference types="react-scripts" />
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
    web3?: any;
  }
}

interface Window {
  ethereum: any;
}
