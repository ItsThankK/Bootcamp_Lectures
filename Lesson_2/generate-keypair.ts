import { Keypair } from "@solana/web3.js";

const newKeypair = Keypair.generate();

console.log(`Public key ---> `, newKeypair.publicKey.toBase58());
console.log("\n");
console.log(`Secret key ---> `, newKeypair.secretKey);
