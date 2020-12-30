function sign_message(message, private_key) {
    var Web3 = require('web3');
    var web3 = new Web3();
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    public_address = account.address;
    
    var signature_json = web3.eth.accounts.sign(
        message,
        private_key
    );
    
    signature = signature_json.signature;
    return signature;
}

function verify_signature(message, signature, address) {
    var Web3 = require('web3');
    var web3 = new Web3();

    recovered_address = web3.eth.accounts.recover(
        message,
        signature,
        false);
    
    if(recovered_address === address) {
        return true;
    } else {
        return false;
    }
}

module.exports = { sign_message, verify_signature };