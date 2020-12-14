const fs = require('fs');
const conf = require("../api/conf");

function main() {
    config_json = conf.read_config("./config.json");
    console.log(`Private Key: ${config_json.private_key}, Address: ${config_json.ethereum_address}`);



    console.log(blah);

}

main();