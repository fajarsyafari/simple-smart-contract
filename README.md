---

````markdown
# 🧠 Simple Smart Contract

This project contains a basic Solidity smart contract and demonstrates how to develop, test, and deploy using [Hardhat](https://hardhat.org/).

> Created by **Fajar Syafari**

---

## 🔧 Technologies Used

- **Solidity** – Smart contract programming language
- **Hardhat** – Ethereum development environment
- **Ethers.js** – Library to interact with the blockchain
- **Mocha + Chai** – JavaScript testing framework

---

## 📦 Installation & Setup

1. **Clone the repository**:

```bash
git clone https://github.com/fajarsyafari/simple-smart-contract.git
cd simple-smart-contract
````

2. **Install dependencies**:

```bash
npm install
```

3. **Compile the contract**:

```bash
npx hardhat compile
```

4. **Start local blockchain** (in a new terminal tab):

```bash
npx hardhat node
```

5. **Deploy the contract** (from original terminal):

```bash
npx hardhat run scripts/deploy.js --network localhost
```

6. **Run the test suite**:

```bash
npx hardhat test
```

---

## 📂 Project Structure

```bash
.
├── contracts/
│   └── SimpleStorage.sol       # Solidity smart contract
├── scripts/
│   └── deploy.js               # Deployment script
├── test/
│   └── SimpleStorage.test.js   # Unit tests
├── hardhat.config.js           # Hardhat configuration
├── package.json                # Project metadata & dependencies
└── README.md                   # Project documentation
```

---

## 🧠 Contract Summary

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SimpleStorage {
    uint256 private number;

    function set(uint256 _num) public {
        number = _num;
    }

    function get() public view returns (uint256) {
        return number;
    }
}

---

---



---

## 📜 License

MIT License
© 2025 Fajar Syafari
Great! Here's the **English version** of the final steps you can follow after pasting the README content:

---
