import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const prompt = require("prompt-sync") ();
const suppliedPublicKey = prompt("Paste your address here 👉 ")

if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
} else {
    console.log(PublicKey.isOnCurve(suppliedPublicKey)); //If true, address is valid
}

//const connection = new Connection("https://api.devnet.solana.com", "confirmed"); //Devnet connection
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed"); //Mainnet connection

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
);