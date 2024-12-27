const { version } = require('../package.json');
const abstractTestnet = require('./constants/tokenLists/abstract_testnet.tokenlist.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  const l1List = {
    name: 'Antar Default',
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: '',
    keywords: ['antar', 'default'],
    tokens: [...abstractTestnet.tokens]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return l1List;
};