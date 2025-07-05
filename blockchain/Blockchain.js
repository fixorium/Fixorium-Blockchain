const Block = require('./Block');
const ProofOfWork = require('../consensus/ProofOfWork');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.difficulty = 4;
    this.miningReward = 100;
    this.proofOfWork = new ProofOfWork(this.difficulty);
  }

  createGenesisBlock() {
    const genesisBlock = new Block(Date.now(), [], "0");
    const mined = this.proofOfWork.mine(genesisBlock);
    genesisBlock.nonce = mined.nonce;
    genesisBlock.hash = mined.hash;
    return genesisBlock;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(minerAddress) {
    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    const mined = this.proofOfWork.mine(block);
    block.nonce = mined.nonce;
    block.hash = mined.hash;

    this.chain.push(block);

    this.pendingTransactions = [
      { fromAddress: null, toAddress: minerAddress, amount: this.miningReward }
    ];
  }

  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    if (!transaction.isValid()) {
      throw new Error('Cannot add invalid transaction to chain');
    }

    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;
    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }
        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }
    return balance;
  }
}

module.exports = Blockchain;

