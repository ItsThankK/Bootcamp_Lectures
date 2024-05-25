import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const loadedKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Public key ---> `, loadedKeypair.publicKey.toBase58());
console.log("\n");
console.log(`Secret key ---> `, loadedKeypair.secretKey);
