const crypto = require('crypto');

class ProofOfWork {
  constructor(difficulty = 4) {
    this.difficulty = difficulty;
  }

  mine(block) {
    let nonce = 0;
    let hash = this.calculateHash(block, nonce);

    while (!hash.startsWith('0'.repeat(this.difficulty))) {
      nonce++;
      hash = this.calculateHash(block, nonce);
    }

    return { nonce, hash };
  }

  calculateHash(block, nonce) {
    const data = block.previousHash + JSON.stringify(block.transactions) + block.timestamp + nonce;
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  validate(block) {
    const hash = this.calculateHash(block, block.nonce);
    return hash.startsWith('0'.repeat(this.difficulty)) && hash === block.hash;
  }
}

module.exports = ProofOfWork;

