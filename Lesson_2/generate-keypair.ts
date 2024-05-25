import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Public key ---> `, keypair.publicKey.toBase58());
console.log("\n");
console.log(`Secret key ---> `, keypair.secretKey);
