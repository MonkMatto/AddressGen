import { Wallet } from "ethers";

// MetaMask derivation path
const path = "m/44'/60'/0'/0/0";

// Generate mnemonic
const wallet = Wallet.createRandom();
const derived = Wallet.fromPhrase(wallet.mnemonic.phrase, path);

console.log("\n");
console.log("Seed Phrase:");
console.log(wallet.mnemonic.phrase);

console.log("\nAddress:");
console.log(wallet.address);

console.log("\nDerivation path (for reference):");
console.log(path);
// console.log(`Address derivation verified: ${derived.address == wallet.address}`);
console.log("\n");