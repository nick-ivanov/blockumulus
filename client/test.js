const ecdsa = require("../api/ecdsa");
const hash = require("../api/hash");
const file = require("../api/file");

// Public address: 0xf61b447aEF8Ae8B8f996A510F2F76C9aE6B42792
//var private_key = "0x0357fcde5d7b85d11d8cb19e7cf47223e6947b3ebfdf567781c26b1203f8ccf3";

var signature = ecdsa.sign_message("my message1", "0x0357fcde5d7b85d11d8cb19e7cf47223e6947b3ebfdf567781c26b1203f8ccf3");
console.log(signature);

console.log("Signature valid: " + ecdsa.verify_signature("my message1", signature, "0xf61b447aEF8Ae8B8f996A510F2F76C9aE6B42792"));


var Client = require('node-rest-client').Client;
var client = new Client();
 
// client.get(`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=0xdac17f958d2ee523a2206206994597c13d831ec7&apikey=8TUK1TGEP6Z9MTMTKQYN97DPKNCR876B6A`, function (data, response) {
//     console.log(data.result);
// });

console.log(hash.keccak256_hash("blah"));
console.log(hash.keccak256_hash_no_prefix("blah"));

var a = file.read_file("mary.txt");

if(a == null) {
    console.log("OOOOPS!");
} else {
    console.log("File content:");
    console.log(a);
}

var res = file.write_file("mobile.txt", "Oh the eagles they fly high in Mobile.");

if(res) {
    console.log("The file is written successfully.");
} else {
    console.log("Something went wrong :(");
}
