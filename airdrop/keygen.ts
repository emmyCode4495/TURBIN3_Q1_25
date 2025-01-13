// import { Keypair } from "@solana/web3.js";


// // Generate a new keypair
// let kp = Keypair.generate()

// console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`)
// console.log(`\nSecret Key is: [${kp.secretKey}]`)

// import { Keypair } from "@solana/web3.js";

// // Your 32-byte private key
// const privateKey = new Uint8Array([
//   169,  61,  50,   2,  91, 217, 163,  25,
//   149,  49, 105,  55, 142,  77,  11,  55,
//   187,  70,  70, 101,  28,  47, 183, 169,
//     9, 128, 119,  18, 240, 201, 231,   9
// ]);

// // Generate a keypair from the private key
// const keypair = Keypair.fromSeed(privateKey);

// console.log("Public Key:", keypair.publicKey.toBase58());
// console.log("Secret Key:", keypair.secretKey); // 64 bytes

import { Keypair } from '@solana/web3.js';
import * as fs from 'fs';


// Provided private key array
const privateKeyArray = [70,74,84,178,110,45,160,192,10,8,164,42,88,146,250,140,8,33,84,30,64,229,123,170,51,29,160,202,103,146,110,127,169,61,50,2,91,217,163,25,149,49,105,55,142,77,11,55,187,70,70,101,28,47,183,169,9,128,119,18,240,201,231,9];

const privateKey = Uint8Array.from(privateKeyArray);

// Create a Keypair from the known private key
const keypair = Keypair.fromSecretKey(privateKey);

// Verify the public key
console.log("Public Key:", keypair.publicKey.toBase58());

// Save the private key in JSON format
const output = {
  private_wallet: Array.from(keypair.secretKey),
};
fs.writeFileSync('keypair.json', JSON.stringify(output, null, 2));
console.log("Keypair saved to keypair.json");

