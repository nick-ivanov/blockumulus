const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const conf = require("../api/conf");
const base64 = require("../api/base64");
const time = require("../api/time");
const file = require("../api/file");
const post_message = require('../api/post_message');
const compose_message = require('../api/compose_message');
const random_account = require("../api/random_account");


function main() {
    var A = random_account.generate_random_account();
    var rand_private_key = random_account.get_private_key(A);
    var rand_address = random_account.get_public_address(A);

    config_json = conf.read_config("../../blockumulus-config/client-config.json");

    //s = "blah";
    //s64 = base64.base64_encode(s);
    //ss = base64.base64_decode(s64);

    if(process.argv[2].toLowerCase() === "txn") {
        var bapp = process.argv[3];
        var arguments = "";
        for(var i = 4; i < process.argv.length; i++) {
            if(i != 4) {
                arguments += " ";
            }
            arguments += process.argv[i];
        }

        var message = compose_message.compose_message (
            "TXN",
            config_json.service_ethereum_address,
            "",
            { bapp: bapp, request: arguments },
            rand_address,
            rand_private_key
        );

        post_message.post_message(config_json.service_cell_ip, 3141, message, function(data) {
                console.log(`${JSON.stringify(data)}`);
            }
        );

    } else if(process.argv[2].toLowerCase() === "report") {
        var message = compose_message.compose_message (
            "REPORT",
            config_json.service_ethereum_address,
            "",
            {},
            rand_address,
            rand_private_key
        );

        post_message.post_message("52.188.62.238", 3141, message, function(data) {
                console.log(`${JSON.stringify(data)}`);
            }
        );

        post_message.post_message("13.82.136.48", 3141, message, function(data) {
                console.log(`${JSON.stringify(data)}`);
            }
        );

        if(config_json.number_of_cells > 2) {
            post_message.post_message("13.90.35.55", 3141, message, function(data) {
                    console.log(`${JSON.stringify(data)}`);
                }
            );

            post_message.post_message("40.121.34.190", 3141, message, function(data) {
                    console.log(`${JSON.stringify(data)}`);
                }
            );
        }

        if(config_json.number_of_cells > 4) {
            post_message.post_message("52.188.145.50", 3141, message, function(data) {
                    console.log(`${JSON.stringify(data)}`);
                }
            );

            post_message.post_message("13.92.40.188", 3141, message, function(data) {
                    console.log(`${JSON.stringify(data)}`);
                }
            );

            post_message.post_message("40.88.14.56", 3141, message, function(data) {
                    console.log(`${JSON.stringify(data)}`);
                }
            );

            post_message.post_message("40.88.2.11", 3141, message, function(data) {
                    console.log(`${JSON.stringify(data)}`);
                }
            );
        }

    } else {
        console.log(`ERROR: command '${process.argv[2]}' is not recognized.`);
    }
}

main();