import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    ethereum: {
      url: "https://mainnet.infura.io/v3/6e87d85d19b74aae8d03cfe6099a54d9",
      chainId: 1,
      timeout: 20000,
    },
    goerli: {
      url:"https://goerli.infura.io/v3/6e87d85d19b74aae8d03cfe6099a54d9",
      chainId: 5,
      timeout: 20000,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};

export default config;
