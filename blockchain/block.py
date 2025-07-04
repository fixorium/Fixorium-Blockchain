 class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = ''

    def calculate_hash(self):
        data_string = str(self.index) + str(self.timestamp) + self.data + self.previous_hash
        return hashlib.sha256(data_string.encode()).hexdigest()
