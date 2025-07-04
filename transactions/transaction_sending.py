class TransactionSending:
    def __init__(self, sender, recipient, amount):
        self.sender = sender
        self.recipient = recipient
        self.amount = amount

    def send_transaction(self):
        # Send the transaction
        print(f'Transaction sent from {self.sender} to {self.recipient} for {self.amount}')
