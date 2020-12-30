function generate_random_account() {
    var Web3 = require('web3');
    var web3 = new Web3();
    var privkey = web3.utils.randomHex(32);
    var eoa = web3.eth.accounts.privateKeyToAccount(privkey);
    return eoa;
}

function get_private_key(account) {
    return account.privateKey;
}

function get_public_address(account) {
    return account.address;
}

module.exports = { generate_random_account, get_private_key, get_public_address };