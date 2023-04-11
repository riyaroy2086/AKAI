// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // ethereum testnet
    sepolia: {
      url: process.env.SEPOLIA_API,
      accounts: [process.env.PRIVATE_KEY],
    },
    //polygon testnet
    mumbai : {
      url: process.env.MUMBAI_API,
      accounts: [process.env.PRIVATE_KEY]
    },
    //polygon mainnet
    matic : {
      url: process.env.MATIC_API,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  // for the verfication of the contract on etherscan/polyscan
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API
    },
    apiKey: {
      polygonMainnet: process.env.POLYGONSCAN_API
    }
  }
};

