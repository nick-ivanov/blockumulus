const { json } = require('body-parser');
const { config } = require('process');
const forward = require('../api/forward');
const call_app = require("../api/call_app");
const base64 = require("../api/base64");
const hashfile = require("../api/hashfile");
const compose_message = require("../api/compose_message");
const conf = require("../api/conf");
const uuidtrack = require("../api/uuidtrack");


function process_forward(json_object, res) {
    console.log("Hey, there is an incoming transaction forward request.");

    //console.log(`BAPP: ${json_object.command.data.bapp}`);
    console.log(`REQUEST: ${json_object.command.data.request}`);

    call_app.call_app(json_object.command.data.forwarded_message.command.data.bapp, json_object.command.data.forwarded_message.command.data.request,
        function(result) {
            console.log(`The forwarded app reply: ${result.trim()}`);

            var reply_message = compose_message.compose_message (
                "FORWARD-OK",
                json_object.command.from,
                json_object.command.uuid,
                { fwd_app_reply: result.trim() },
                config_json.ethereum_address,
                config_json.private_key
            );
    
            res.send(reply_message);
        }
    );
}


function process_transaction(json_object, res, extra) {
    console.log("Hey, there is an incoming transaction.");

    console.log(`BAPP: ${json_object.command.data.bapp}`);
    console.log(`REQUEST: ${json_object.command.data.request}`);

    call_app.call_app(json_object.command.data.bapp, json_object.command.data.request,
        function(result) {
            console.log(`The app reply: ${result.trim()}`);

            var reply_message = compose_message.compose_message (
                "TXN-OK",
                json_object.command.from,
                json_object.command.uuid,
                { app_reply: result.trim() },
                config_json.ethereum_address,
                config_json.private_key
            );
    
            console.log(`S1: ${reply_message}\n\nEXTRA:${JSON.stringify(extra)}`);
            console.log(`S2: ${JSON.stringify(reply_message)}\n---\nEXTRA:${extra}`);
            res.send(`REPLY_MESSAGE: ${JSON.stringify(reply_message)}\n\nEXTRA:${JSON.stringify(extra)}`);
        }
    );
}

function main() {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 3141;

    config_json = conf.read_config("../../blockumulus-config/cell-config.json");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.raw());
    app.use(bodyParser.json({ limit: '50mb' }))

    app.post('/', function (req, res) {
            json_object = req.body;

        if(!uuidtrack.uuid_used("used_uuids", json_object.command.uuid)) {

            uuidtrack.register_uuid("used_uuids", json_object.command.uuid);

            if(json_object.command.op === "UPLOAD") {
                console.log("Hey, upload request detected.");
                var decoded_data = base64.base64_decode(json_object.command.data.base64_blob);

                console.log("Size: " + decoded_data.length);

                if(hashfile.write_hashfile("data", decoded_data) == true) {
                    console.log("File written successfully.");
                } else {
                    console.log("Error writing file.");
                }
            }

            if(json_object.command.op === "UPLOAD") {
                console.log("Hey, an upload request is detected.");
            }

            if(json_object.command.op === "ACCOUNT") {
                console.log("Hey, an account request is detected.");
            }

            if(json_object.command.op === "FORWARD") {
                console.log("Hey, a cohort request is detected.");
                process_forward(json_object, res);
            }

            if(json_object.command.op === "TXN") {
                forward.forward_request(config_json, json_object, function(data) {
                        //console.log(`DATA in cell/main(): ${JSON.stringify(data)}`);
                        process_transaction(json_object, res, data);
                    }
                );
                //console.log(`Let's see what's in res: ${JSON.stringify(res)}`);
            }
        }
    });

    app.listen(port, () => {
        console.log(`Blockumulus Cell is listening at http://localhost:${port}`);
    });
}

main();