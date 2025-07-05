 const Blockchain = require('./blockchain/Blockchain');
const Transaction = require('./transactions/Transaction');
const CryptoUtils = require('./utils/CryptoUtils');

const myBlockchain = new Blockchain();

const keyPair = CryptoUtils.generateKeyPair();
const myAddress = keyPair.publicKey;

const transaction1 = new Transaction(myAddress, 'recipientAddress', 50);
transaction1.signTransaction(keyPair.privateKey);
myBlockchain.addTransaction(transaction1);

console.log('Mining...');
myBlockchain.minePendingTransactions(myAddress);

console.log(`Balance of my address: ${myBlockchain.getBalanceOfAddress(myAddress)}`);
