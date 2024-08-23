# Kallet

**Kallet** is a wallet generator and manager that allows users to create and manage cryptocurrency wallets, view and manage private/public keys, and securely store and copy sensitive information. It is designed to work seamlessly in React projects.

## Features

- **Generate Wallet**: Create a new wallet and view the generated private and public keys.
- **Import Wallet**: Enter an existing recovery phrase to generate keys.
- **Toggle Visibility**: Show or hide private keys and recovery phrases to enhance security.
- **Copy to Clipboard**: Easily copy private keys, public keys, and the recovery phrase.

## Installation

1. **Ensure Node.js and npm are installed**:
   - Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

2. **Clone the repository**:
   - Clone this repository or add the component to your existing React project.

   ```bash
   git clone https://github.com/kuslhhh/Kallet.git
   ```

3. **Install the required dependencies**:
   - Navigate to the project directory and run the following command:

   ```bash
   npm install tweetnacl bip39 ed25519-hd-key @solana/web3.js sonner lucide-react
   ```

4. **Import and use the `WalletGenerator` component**:
   - Integrate the `WalletGenerator` component into your project by importing and using it in your React components.

## State Management

- `mnemonicWords`: Stores the words of the recovery phrase.
- `seed`: Stores the seed derived from the mnemonic.
- `privateKeys`: Stores the generated private keys.
- `publicKeys`: Stores the generated public keys.
- `showMnemonic`: Boolean state to toggle the visibility of the recovery phrase.
- `showPrivateKeys`: Boolean state to toggle the visibility of private keys.

## How It Works

### Generating a Wallet:

- Generates a new mnemonic phrase and derives the corresponding seed.
- Uses the seed to generate private and public keys.
- Displays the generated keys and mnemonic phrase.

### Importing a Wallet:

- Optionally, enter a recovery phrase to derive private and public keys.

### Visibility Toggle:

- Private keys and recovery phrases can be toggled between visible and censored (asterisks) for security.

### Clipboard Copy:

- Provides functionality to copy private keys, public keys, and the recovery phrase to the clipboard.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
