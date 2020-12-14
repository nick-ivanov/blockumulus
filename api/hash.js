function keccak256_hash(message) {
    var Web3 = require('web3');
    var web3 = new Web3();
    return web3.utils.sha3(message);
}

function keccak256_hash_no_prefix(message) {
    var Web3 = require('web3');
    var web3 = new Web3();
    return web3.utils.sha3(message).substring(2);
}

module.exports = { keccak256_hash, keccak256_hash_no_prefix };