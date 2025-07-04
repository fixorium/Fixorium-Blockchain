import hashlib

class Wallet:
    def __init__(self):
        self.private_key = ''
        self.public_key = ''

    def generate_keys(self):
        # Generate a new private key
        self.private_key = hashlib.sha256(str(time.time()).encode()).hexdigest()

        # Generate a public key from the private key
        self.public_key = hashlib.sha256(self.private_key.encode()).hexdigest()
