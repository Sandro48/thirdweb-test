import { ThirdwebSDK } from "@thirdweb-dev/sdk";
require('dotenv').config();
import abi from './abi.json'

const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.SENDER_WALLET_PRIVATE_KEY, // Your wallet's private key (only required for write operations)
    "polygon",
    {
        secretKey: process.env.THIRDWEB_SECRET, // Use secret key if using on the server, get it from dashboard settings
    },
);

export default async function sendTokenTest() {

    const contract = await sdk.getContract("0xc2132D05D31c914a87C6611C10748AEb04B58e8F", abi);

    // Address of the wallet you want to send the tokens to
    const fromAddress = "...";
    const toAddress = "...";
    // The amount of tokens you want to send
    const amount = 1.1;


    const txResultD = await contract.erc20.balanceOf(fromAddress)
    console.log(txResultD)
    const txResult = await contract.erc20.transfer(toAddress, amount)
    console.log(txResult)



}

