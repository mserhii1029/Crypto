require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/a-xPYGJ3cm7ck6G0bHfionb1F4slBdrG',
      accounts: ['3e83b280ebe2df2bc820d1d1542e9701b14830c69e25caa76437aab679a76d82'],
    },
  },
};
