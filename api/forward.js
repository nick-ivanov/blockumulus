const { config } = require("process");
const post_message = require("../api/post_message");

// function proceed_forward(ip, port, message, callback) {
//     console.log(`Forwarding message to ${ip}: ${JSON.stringify(message)}`);
//     var a = post_message.post_message(ip, port, message, function(data) {
//             console.log(`DATA in forward_request(): ${JSON.stringify(data)}`);
//             callback();
//             return "ttt1";
//         }
//     );

//     console.log("AA: " + a);

//     return "ttt";
// }

function forward_request(config_json, json_object, callback) {
    const compose_message = require("../api/compose_message");


    if(config_json.number_of_cells === 2) {
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

            var forwarded_replies = [data0];
            return callback(forwarded_replies);
        });
    }

    if(config_json.number_of_cells === 4) {
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
    }


    if(config_json.number_of_cells === 8) {
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

                    var message3 = compose_message.compose_message (
                        "FORWARD",
                        config_json.cell_eth_addresses[3],
                        "",
                        { forwarded_message: json_object },
                        config_json.ethereum_address,
                        config_json.private_key
                    );
    
                    console.log(`LOG @forward_request message2=${message3}`);
                                
                    post_message.post_message(config_json.cell_ips[3], 3141, message3, function(data3) {

                        var message4 = compose_message.compose_message (
                            "FORWARD",
                            config_json.cell_eth_addresses[4],
                            "",
                            { forwarded_message: json_object },
                            config_json.ethereum_address,
                            config_json.private_key
                        );
        
                        console.log(`LOG @forward_request message2=${message4}`);
                                    
                        post_message.post_message(config_json.cell_ips[4], 3141, message4, function(data4) {

                            var message5 = compose_message.compose_message (
                                "FORWARD",
                                config_json.cell_eth_addresses[5],
                                "",
                                { forwarded_message: json_object },
                                config_json.ethereum_address,
                                config_json.private_key
                            );
            
                            console.log(`LOG @forward_request message2=${message5}`);
                                        
                            post_message.post_message(config_json.cell_ips[5], 3141, message5, function(data5) {

                                var message6 = compose_message.compose_message (
                                    "FORWARD",
                                    config_json.cell_eth_addresses[6],
                                    "",
                                    { forwarded_message: json_object },
                                    config_json.ethereum_address,
                                    config_json.private_key
                                );
                
                                console.log(`LOG @forward_request message2=${message6}`);
                                            
                                post_message.post_message(config_json.cell_ips[6], 3141, message6, function(data6) {
                                    var forwarded_replies = [data0, data1, data2, data3, data4, data5, data6];
                                    return callback(forwarded_replies);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}

module.exports = { forward_request };