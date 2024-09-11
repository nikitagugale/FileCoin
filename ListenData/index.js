import { ethers } from "ethers"

// CryptoCat token contract address on the Filecoin calibration network
const tokenAddress = "0x55867B5dC30dB7c5aB9DC86deB9A82064cc7259B" 

// Minimal ABI to listen to Transfer events, you can use complete ABI as well
var abi = ["event Transfer(address indexed from, address indexed to, uint amount)"]

// Connect to Glif's public Filecoin RPC node
const fielcoin_url = 'https://api.calibration.node.glif.io/rpc/v1'
const provider = new ethers.providers.JsonRpcProvider(fielcoin_url)

//listen to the Transfer events in the Token contract
const token = new ethers.Contract(tokenAddress, abi, provider)
token.on("Transfer", (from, to, value, event)=>{
    let transferEvent ={
        from: from,
        to: to,
        value: value,
        eventData: event,
    }
    console.log(JSON.stringify(transferEvent, null, 4))
})





// {
//     "from": "0xC9021bEa62f40983623d852886Dcea7f448C7DD6",
//     "to": "0xd877A332B0FACf7BD86b1609a9547279aCF38531",
//     "value": {
//         "type": "BigNumber",
//         "hex": "0x3635c9adc5dea00000"
//     },
//     "eventData": {
//         "blockNumber": 1951712,
//         "blockHash": "0x5badda4115c977f5b8e30e2c833095611b1d956d3a5b5db5efc414839da17e61",
//         "transactionIndex": 0,
//         "removed": false,
//         "address": "0x55867B5dC30dB7c5aB9DC86deB9A82064cc7259B",
//         "data": "0x00000000000000000000000000000000000000000000003635c9adc5dea00000",
//         "topics": [
//             "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//             "0x000000000000000000000000c9021bea62f40983623d852886dcea7f448c7dd6",
//             "0x000000000000000000000000d877a332b0facf7bd86b1609a9547279acf38531"
//         ],
//         "transactionHash": "0x4d303fac5c0976c5c8187dc88f12ddc29650189a6f5a1d05b601db87487485a2",
//         "logIndex": 0,
//         "event": "Transfer",
//         "eventSignature": "Transfer(address,address,uint256)",
//         "args": [
//             "0xC9021bEa62f40983623d852886Dcea7f448C7DD6",
//             "0xd877A332B0FACf7BD86b1609a9547279aCF38531",
//             {
//                 "type": "BigNumber",
//                 "hex": "0x3635c9adc5dea00000"
//             }
//         ]
//     }
// }