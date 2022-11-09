// https://eth-goerli.g.alchemy.com/v2/GC6R46sh2VDwsm1w9qF59hk6gBHZB7XX

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/GC6R46sh2VDwsm1w9qF59hk6gBHZB7XX',
      accounts: ['191bc016b0386b6b69c56a9e76cf654426abe5adffa67234f5d3a28f7cb398bf']
    }
  }
}