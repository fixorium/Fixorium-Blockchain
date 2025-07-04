 from flask import Flask, request

app = Flask(__name__)

@app.route('/block/<block_hash>', methods=['GET'])
def get_block(block_hash):
    # Return the block data
    return f'Block {block_hash} data'

if __name__ == '__main__':
    app.run()
