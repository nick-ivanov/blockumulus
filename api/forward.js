const post_message = require("../api/post_message");

function proceed_forward(ip, port, message, callback) {
    console.log(`Forwarding message to ${ip}: ${JSON.stringify(message)}`);
    var a = post_message.post_message(ip, port, message, function(data) {
            console.log(`DATA in forward_request(): ${JSON.stringify(data)}`);
            callback();
            return "ttt1";
        }
    );

    console.log("AA: " + a);

    return "ttt";
}


function forward_request(config_json, json_object, callback) {
    console.log(`LOG: @forward_request config_json=${JSON.stringify(config_json)}, json_object=${JSON.stringify(json_object)}`);
    const compose_message = require("../api/compose_message");
    console.log(`@foward_request json_object: ${JSON.stringify(json_object)}`);
    var accrue = "DATA 111: ";

    var message0 = compose_message.compose_message (
        "FORWARD",
        config_json.cell_eth_addresses[0],
        "",
        { forwarded_message: json_object },
        config_json.ethereum_address,
        config_json.private_key
    );

    console.log(`LOG @forward_request message0=${message0}`);

    post_message.post_message(config_json.cell_ips[0], 3141, message0, function(data0) {

        var message1 = compose_message.compose_message (
            "FORWARD",
            config_json.cell_eth_addresses[1],
            "",
            { forwarded_message: json_object },
            config_json.ethereum_address,
            config_json.private_key
        );

        console.log(`LOG @forward_request message1=${message1}`);
    
        post_message.post_message(config_json.cell_ips[1], 3141, message1, function(data1) {

            var message2 = compose_message.compose_message (
                "FORWARD",
                config_json.cell_eth_addresses[2],
                "",
                { forwarded_message: json_object },
                config_json.ethereum_address,
                config_json.private_key
            );

            console.log(`LOG @forward_request message2=${message2}`);
                        
            post_message.post_message(config_json.cell_ips[2], 3141, message2, function(data2) {
                var forwarded_replies = [data0, data1, data2];
                return callback(forwarded_replies);
            });
        });
    });

    // for(var i = 0; i < config_json.cell_ips.length; i++) {
    //     if(config_json.cell_ips[i] === config_json.this_ip) {
    //         continue;
    //     }

    //     var message = compose_message.compose_message (
    //         "FORWARD",
    //         config_json.cell_eth_addresses[i],
    //         "",
    //         { forwarded_message: json_object },
    //         config_json.ethereum_address,
    //         config_json.private_key
    //     );

    //     // console.log(`Forwarding message to ${config_json.cell_ips[i]}: ${JSON.stringify(message)}`);
    //     // post_message.post_message(config_json.cell_ips[i], 3141, message, function(data) {
    //     //         console.log(`DATA in forward_request(): ${JSON.stringify(data)}`);
    //     //         return "ttt";
    //     //     }
    //     // );








        

    //     // accrue += proceed_forward(config_json.cell_ips[i], 3141, message, function() {});
    // }

    // return callback(accrue);
}

module.exports = { forward_request };