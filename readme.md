# AddressGen Wallet Generator

Generate a new Ethereum wallet **locally**: a BIP-39 mnemonic and its corresponding **first MetaMask address** (`m/44'/60'/0'/0/0`).
Designed for offline art drops, paper wallets, and giveaways.

## Requirements

* Node.js v18+ (v20+ recommended)

## Setup

```bash
git clone <this-repo>
cd <this-repo>
npm install
```

## Run

```bash
node generate.js
```

The script will:

* generate a new mnemonic phrase / seed phrase
* derive the first Ethereum address (MetaMask-compatible)
* print all to screen including derivation path for reference

## MetaMask Compatibility

Import the generated mnemonic into MetaMask.
The **first account shown in Metamask will match the address printed by the script**.

## Security Notes

* Run offline on a trusted machine
* Anyone with the mnemonic has full control of the wallet