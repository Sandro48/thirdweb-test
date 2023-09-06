import { ThirdwebSDK } from "@thirdweb-dev/sdk";
require('dotenv').config()

const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.SENDER_WALLET_PRIVATE_KEY, // Your wallet's private key (only required for write operations)
    "polygon",
    {
        secretKey: process.env.THIRDWEB_SECRET, // Use secret key if using on the server, get it from dashboard settings
    },
);

export default async function sendTokenTest() {

    const contract = await sdk.getContract("0xc2132D05D31c914a87C6611C10748AEb04B58e8F");

    // Address of the wallet you want to send the tokens to
    const fromAddress = "...";
    const toAddress = "...";
    // The amount of tokens you want to send
    const amount = '1000000';


    const approveData = await contract.call(
        'approve',
        [
            fromAddress,
            amount,
        ],

    )

    console.log(approveData)


    // const data = await contract.call(
    //     'transferFrom',
    //     [
    //         fromAddress,
    //         toAddress,
    //         amount
    //     ],

    // )

    // console.log(data)



}

