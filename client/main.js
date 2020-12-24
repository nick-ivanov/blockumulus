const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const conf = require("../api/conf");
const base64 = require("../api/base64");
const time = require("../api/time");
const file = require("../api/file");
const post_message = require('../api/post_message');
const compose_message = require('../api/compose_message');

function main() {

    //console.log(process.argv);
    config_json = conf.read_config("../../blockumulus-config/client-config.json");
    //console.log(`Private Key: ${config_json.private_key}, Address: ${config_json.ethereum_address}`);

    s = "blah";
    s64 = base64.base64_encode(s);
    ss = base64.base64_decode(s64);

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



    if(process.argv[2].toLowerCase() === "txn") {
        var bapp = process.argv[3];
        var arguments = "";
        for(var i = 4; i < process.argv.length; i++) {
            if(i != 4) {
                arguments +=  " ";
            }
            arguments += process.argv[i];
        }

        var message = compose_message.compose_message (
            "TXN",
            "0x550F266Eb5C840fD666369a76D3b416d749a917B",
            "",
            { bapp: bapp, request: arguments },
            config_json.ethereum_address,
            config_json.private_key
        );

        post_message.post_message("64.225.14.250", 3141, message, function(data) {
                console.log(`${JSON.stringify(data)}`);
            }
        );

    } else if(process.argv[2].toLowerCase() === "report") {
        var message = compose_message.compose_message (
            "REPORT",
            "0x550F266Eb5C840fD666369a76D3b416d749a917B",
            "",
            {},
            config_json.ethereum_address,
            config_json.private_key
        );
    
        post_message.post_message("64.225.14.250", 3141, message, function(data) {
                console.log(`${JSON.stringify(data)}`);
            }
        );
    } else {

        console.log(`ERROR: command '${process.argv[2]}' is not recognized.`);


        // var message1 = compose_message.compose_message (
        //     "TXN",
        //     "0x550F266Eb5C840fD666369a76D3b416d749a917B",
        //     "",
        //     { bapp: "fastmoney", request: `balance bob` },
        //     config_json.ethereum_address,
        //     config_json.private_key
        // );

        // post_message.post_message("64.225.14.250", 3141, message1, function(data) {
        //         console.log(`DATA in client/main(): ${JSON.stringify(data)}`);
        //         // console.log("===============");
        //         // console.log(`DATA in client/main() 1: ${data}`);
        //     }
        // );

        // var message2 = compose_message.compose_message (
        //     "TXN",
        //     "0x550F266Eb5C840fD666369a76D3b416d749a917B",
        //     "",
        //     { bapp: "fastmoney", request: `balance nick` },
        //     config_json.ethereum_address,
        //     config_json.private_key
        // );


        // post_message.post_message("64.225.14.250", 3141, message2, function(data) {
        //     console.log(`DATA in client/main(): ${JSON.stringify(data)}`);
        //     // console.log("===============");
        //     // console.log(`DATA in client/main() 1: ${data}`);
        //     }
        // );



        //console.log(`RESULT: ${result}`);

    }
}

main();