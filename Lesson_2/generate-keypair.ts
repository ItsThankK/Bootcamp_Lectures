import { Keypair } from "@solana/web3.js";
import { log } from "console";

const newKeypair = Keypair.generate();

console.log(`Public key ---> ${newKeypair.publicKey}`);
console.log("\n");
console.log(`Secret key ---> ${newKeypair.secretKey}`);
