const fs = require('fs');
const conf = require("../api/conf");
const base64 = require("../api/base64");
const time = require("../api/time");
const post_command = require("../api/post_command");
const file = require("../api/file");

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



    // console.log("post_command() returns: " + post_command.post_command (
    //             "localhost",
    //             3000,
    //             "tnx",
    //             "",
    //             {foo: "bar"},
    //             config_json.ethereum_address,
    //             config_json.private_key
    //         )
    //     );


    var foo_data = file.read_file("ls.bin");
    var b64_payload = base64.base64_encode(foo_data);
    
    console.log("file transfer post_command() returns: " + post_command.post_command (
            "localhost",
            3141,
            "UPLOAD",
            "",
            { base64_blob: b64_payload },
            config_json.ethereum_address,
            config_json.private_key
        )
    );

    
}

main();