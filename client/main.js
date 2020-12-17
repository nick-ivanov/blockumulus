const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const conf = require("../api/conf");
const base64 = require("../api/base64");
const time = require("../api/time");
const file = require("../api/file");
const post_message = require('../api/post_message');
const compose_message = require('../api/compose_message');

function main() {
    config_json = conf.read_config("./config.json");
    console.log(`Private Key: ${config_json.private_key}, Address: ${config_json.ethereum_address}`);


    s = "blah";
    s64 = base64.base64_encode(s);
    console.log(s64);

    ss = base64.base64_decode(s64);

    console.log(ss);


    // console.log(time.get_timestamp_sec());
    // console.log(time.get_timestamp_ms());



 




    // var message = compose_message.compose_message (
    //     "TXN",
    //     "0x550F266Eb5C840fD666369a76D3b416d749a917B",
    //     "",
    //     { bapp: "fastmoney", request: `transfer ${uuidv4()} nick bob 2` },
    //     config_json.ethereum_address,
    //     config_json.private_key
    // );

    // var result = post_message.post_message("localhost", 3141, message);

    // console.log(`RESULT: ${result}`);




    var message = compose_message.compose_message (
        "TXN",
        "0x550F266Eb5C840fD666369a76D3b416d749a917B",
        "",
        { bapp: "fastmoney", request: `balance nick` },
        config_json.ethereum_address,
        config_json.private_key
    );

    var result = post_message.post_message("localhost", 3141, message);

    console.log(`RESULT: ${result}`);
}

main();