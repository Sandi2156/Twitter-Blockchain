require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.2',
	networks: {
		rinkeby: {
			url:
				'https://eth-rinkeby.alchemyapi.io/v2/X60yIyibPNw_hvQoYwvBZvbPgTFrQ2RU',
			accounts: [
				'5a22aa6ef5198191675e73319c1fb5417c3590645dbc7459ddd044325698d154',
			],
		},
		localNode: {
			url: 'http://127.0.0.1:8545/',
			accounts: [
				'0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
			],
		},
		goreli: {
			url:
				'https://eth-goerli.g.alchemy.com/v2/WigEhoK0TqlKEExqgPu2EFIFGoEdHDuj',
			accounts: [
				'436c1fc4adafc65e9534c340ceb1a5f327af295e8056f887ca0e3e335949ce89',
			],
		},
	},
};
