require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz enter brand spot toy note often comic install clog front skate'; 
let testAccounts = [
"0xc64a4401b50e6e0ea01386524619bcb9bac55a70f68a8b7b83a735728ada736e",
"0x4d1a63f84ddc35a899a6251d996f62e505dcdb9773746e485815d449ec3480ac",
"0xe5916cd88c997056f0b11f6a21bf34698dda4e582776854bb04a6d41ab83cce9",
"0x2061f7d79e784289ca8e0de761af26f1fe03acc9bb2ee9e505421b6e7d178208",
"0xe33c4c6e7dbafada030f6b964756c214caaef6b64b3f7cc03d2b6883cc1bdf45",
"0x7d47fb8215ee7a672807da76e494e4fd400ed6933dfdb5bd4959b8a7480b507a",
"0x08539825d7843b78ca595480ebb866677bcbda2fc7a0e5fcfd449cda03c07ef2",
"0x74e5a71e510c3a2c8308cbf6ef4c8fcb7ca3d154a6f361973fedca296b0dcfd9",
"0x1c70eac2e48c5ff0d878633babb96c0fa07f891ae71ed6de5885190eb7efec61",
"0x72edb69624b655d0285547d7f0fd0e9c02c560f065780ca7d422a7bf6359aca7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

