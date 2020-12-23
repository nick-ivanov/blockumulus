const { json } = require('body-parser');
const { config } = require('process');
const forward = require('../api/forward');
const call_app = require("../api/call_app");
const base64 = require("../api/base64");
const hashfile = require("../api/hashfile");
const compose_message = require("../api/compose_message");
const conf = require("../api/conf");
const uuidtrack = require("../api/uuidtrack");
const report = require("../api/report");
const contract = require("../api/contract");
const time = require("../api/time");

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

function process_transaction(json_object, res, forwarded_replies) {
    console.log("Hey, there is an incoming transaction.");

    var last_report = report.get_last_report();
    var report_due = time.recent_report_due(config_json);

    console.log(`LOG: @cell/main: process_transaction, last_report: ${last_report}`);
    console.log(`LOG: @cell/main: REPORT, report_due: ${report_due}`);

    if(last_report < report_due) {
        console.log("Report expired");
        var reply_message = compose_message.compose_message (
            "TXN-FAIL",
            json_object.command.from,
            json_object.command.uuid,
            { app_reply: result.trim(), forwarded_replies: forwarded_replies, message: "Report expired." },
            config_json.ethereum_address,
            config_json.private_key
        );

        res.send(reply_message);    

    } else {
        console.log("Report update is not needed.");
    
        call_app.call_app(json_object.command.data.bapp, json_object.command.data.request,
            function(result) {
                console.log(`The app reply: ${result.trim()}`);

                var reply_message = compose_message.compose_message (
                    "TXN-OK",
                    json_object.command.from,
                    json_object.command.uuid,
                    { app_reply: result.trim(), forwarded_replies: forwarded_replies },
                    config_json.ethereum_address,
                    config_json.private_key
                );
        
                res.send(reply_message);
            }
        );
    }
}

function process_report(config_json, callback1) {
    last_report = report.get_last_report();
    console.log(`LOG: @cell/main: REPORT, last_report: ${last_report}`);

    console.log(`LOG: @cell/main, config_json.this_ip: ${config_json.this_ip}`);
    
    var contract_config = "../../blockumulus-config/contract-config.json";

    var report_due = time.recent_report_due(config_json);

    console.log(`LOG: @cell/main: REPORT, report_due: ${report_due}`);

    call_app.call_app("fastmoney", "fingerprint", function(result) {
        console.log(`LOG @cell/main:REPORT, result: ${result}`);


        if(config_json.this_ip === "64.225.14.250") {
            contract.do_cell1_report (
                contract_config,
                config_json.private_key,
                report_due,
                result.trim(),
                function callback(txnresult) {
                    console.log(`LOG txnresult (cell1): ${JSON.stringify(txnresult)}`);
                    return callback1(txnresult);
                }
            );
        }

        if(config_json.this_ip === "104.236.14.189") {
            contract.do_cell2_report (
                contract_config,
                config_json.private_key,
                report_due,
                result.trim(),
                function callback(txnresult) {
                    console.log(`LOG txnresult (cell2): ${JSON.stringify(txnresult)}`);
                    return callback1(txnresult);
                }
            );
        }

        if(config_json.this_ip === "104.236.14.188") {
            contract.do_cell3_report (
                contract_config,
                config_json.private_key,
                report_due,
                result.trim(),
                function callback(txnresult) {
                    console.log(`LOG txnresult (cell3): ${JSON.stringify(txnresult)}`);
                    return callback1(txnresult);
                }
            );
        }

        if(config_json.this_ip === "157.245.117.157") {
            contract.do_cell4_report (
                contract_config,
                config_json.private_key,
                report_due,
                result.trim(),
                function callback(txnresult) {
                    console.log(`LOG txnresult (cell4): ${JSON.stringify(txnresult)}`);
                    return callback1(txnresult);
                }
            );
        }
    });
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

            if(json_object.command.op === "REPORT") {
                console.log("Hey, a REPORT request is detected.");
                
                var last_report = report.get_last_report();
                var report_due = time.recent_report_due(config_json);

                if(last_report < report_due) {
                    console.log("Report expired");
                    process_report(config_json, function() {
                        report.save_last_report(report_due);
                        var reply_message = compose_message.compose_message (
                            "REPORT-OK",
                            json_object.command.from,
                            json_object.command.uuid,
                            { last_report: last_report },
                            config_json.ethereum_address,
                            config_json.private_key
                        );
    
                        res.send(reply_message);
                    });
                } else {
                    console.log("Report update is not needed.");
                    var reply_message = compose_message.compose_message (
                        "REPORT-FAIL",
                        json_object.command.from,
                        json_object.command.uuid,
                        { last_report: last_report, message: "Report update is not needed." },
                        config_json.ethereum_address,
                        config_json.private_key
                    );

                    res.send(reply_message);
                }
            }

            if(json_object.command.op === "FORWARD") {
                console.log("Hey, a cohort request is detected.");
                process_forward(json_object, res);
            }

            if(json_object.command.op === "TXN") {
                forward.forward_request(config_json, json_object, function(data) {
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