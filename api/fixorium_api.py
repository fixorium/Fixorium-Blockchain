 from flask import Flask, request

app = Flask(__name__)

@app.route('/blockchain', methods=['GET'])
def get_blockchain():
    # Return the blockchain data
    return 'Blockchain data'

if __name__ == '__main__':
    app.run()
