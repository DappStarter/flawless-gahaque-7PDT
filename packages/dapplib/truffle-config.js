require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain umbrella half argue front sleep'; 
let testAccounts = [
"0x52d2d243d964fdd080735dc8606659572a91b64f4ef84742f72437f4ad17007f",
"0xc4dded2045763e387937dcc04d2f042ce62e6fe8d8666e5d76ed8e233e809b02",
"0x5953fec71fee0d9202146d6baae5585da1205f3e2e0205e3663cca65267def4c",
"0x3dcaa4d48b3598ffff4d9be8e6d37e6ad495de807f0b2a07dfaa1c478e2c2937",
"0xbd7fc2eb1182362dd16058222f4669d6cb76f3e24b51c6283dd8169a3ca3bc9f",
"0x0956160a8b00cf60695e267f7aa699c9d56d79fc5f31dc9886f02f8fb9f65205",
"0xc038ed9180a1958e57db3476b7f49561334d96bb7c92a63c02acc8ea4c0c6f93",
"0x8005baae933dfe6018feb30d5b146cd29302e0fb0cb4c8b1ad885bde1971ccf1",
"0xb5329f18ae8b4dfa864d0233c174b8267b06882c1dc127eb5c1441ffe5f0ea25",
"0x5d894dbfdd035558cf6b1e25b925265eb3997fb3280e48effde5c8a548375953"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


