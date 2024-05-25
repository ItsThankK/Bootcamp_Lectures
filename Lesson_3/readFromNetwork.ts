import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

console.log("Connected Successfully!!! 🔥");

const address = new PublicKey("CA6d39s4RuorsqzJBGWUQAi3kFKziUQgzn8uG4Ltfk4Z");
const balance = await connection.getBalance(address);
const balanceInSOL = balance / LAMPORTS_PER_SOL;

console.log(`This account ${address} balance is ${balanceInSOL} SOL 💰`);

