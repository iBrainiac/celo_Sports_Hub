require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});
const mykey = process.env.Key;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  
networks: {
  alfajores: {
      // can be replaced with the RPC url of your choice.
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [
          mykey
      ],
  },
},
}
