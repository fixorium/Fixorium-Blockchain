const crypto = require('crypto');

class CryptoUtils {
  static hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  static generateKeyPair() {
    return crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });
  }
}

module.exports = CryptoUtils;

