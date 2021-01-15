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

function forward_request(config_json, json_object, port, callback) {
    const compose_message = require("../api/compose_message");

    console.log(`@forward.forward_request: HERE`);


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

        post_message.post_message(config_json.cell_ips[0], port, message0, function(data0) {

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

        console.log(`LOG @forward_request message0=${JSON.stringify(message0)}`);

        post_message.post_message(config_json.cell_ips[0], port, message0, function(data0) {

            var message1 = compose_message.compose_message (
                "FORWARD",
                config_json.cell_eth_addresses[1],
                "",
                { forwarded_message: json_object },
                config_json.ethereum_address,
                config_json.private_key
            );

            console.log(`LOG @forward_request message1=${JSON.stringify(message1)}`);
        
            post_message.post_message(config_json.cell_ips[1], port, message1, function(data1) {

                var message2 = compose_message.compose_message (
                    "FORWARD",
                    config_json.cell_eth_addresses[2],
                    "",
                    { forwarded_message: json_object },
                    config_json.ethereum_address,
                    config_json.private_key
                );

                console.log(`LOG @forward_request message2=${JSON.stringify(message2)}`);
                            
                post_message.post_message(config_json.cell_ips[2], port, message2, function(data2) {
                    var forwarded_replies = [data0, data1, data2];
                    return callback(forwarded_replies);
                });
            });
        });
    }


    if(config_json.number_of_cells === 8) {
        console.log(`@forward.forward_request: number of cells is 8`);
        var message0 = compose_message.compose_message (
            "FORWARD",
            config_json.cell_eth_addresses[0],
            "",
            { forwarded_message: json_object },
            config_json.ethereum_address,
            config_json.private_key
        );

        console.log(`LOG @forward_request message0=${JSON.stringify(message0)}`);
        console.log(`LOG @forward_request config_json.cell_ips[0]=${config_json.cell_ips[0]}`);

        post_message.post_message(config_json.cell_ips[0], port, message0, function(data0) {

            var message1 = compose_message.compose_message (
                "FORWARD",
                config_json.cell_eth_addresses[1],
                "",
                { forwarded_message: json_object },
                config_json.ethereum_address,
                config_json.private_key
            );

            console.log(`LOG @forward_request message1=${JSON.stringify(message1)}`);
        
            post_message.post_message(config_json.cell_ips[1], port, message1, function(data1) {

                var message2 = compose_message.compose_message (
                    "FORWARD",
                    config_json.cell_eth_addresses[2],
                    "",
                    { forwarded_message: json_object },
                    config_json.ethereum_address,
                    config_json.private_key
                );

                console.log(`LOG @forward_request message2=${JSON.stringify(message2)}`);
                            
                post_message.post_message(config_json.cell_ips[2], port, message2, function(data2) {

                    var message3 = compose_message.compose_message (
                        "FORWARD",
                        config_json.cell_eth_addresses[3],
                        "",
                        { forwarded_message: json_object },
                        config_json.ethereum_address,
                        config_json.private_key
                    );
    
                    console.log(`LOG @forward_request message3=${JSON.stringify(message3)}`);
                                
                    post_message.post_message(config_json.cell_ips[3], port, message3, function(data3) {

                        var message4 = compose_message.compose_message (
                            "FORWARD",
                            config_json.cell_eth_addresses[4],
                            "",
                            { forwarded_message: json_object },
                            config_json.ethereum_address,
                            config_json.private_key
                        );
        
                        console.log(`LOG @forward_request message4=${JSON.stringify(message4)}`);
                                    
                        post_message.post_message(config_json.cell_ips[4], port, message4, function(data4) {

                            var message5 = compose_message.compose_message (
                                "FORWARD",
                                config_json.cell_eth_addresses[5],
                                "",
                                { forwarded_message: json_object },
                                config_json.ethereum_address,
                                config_json.private_key
                            );
            
                            console.log(`LOG @forward_request message5=${JSON.stringify(message5)}`);
                                        
                            post_message.post_message(config_json.cell_ips[5], port, message5, function(data5) {

                                var message6 = compose_message.compose_message (
                                    "FORWARD",
                                    config_json.cell_eth_addresses[6],
                                    "",
                                    { forwarded_message: json_object },
                                    config_json.ethereum_address,
                                    config_json.private_key
                                );
                
                                console.log(`LOG @forward_request message6=${JSON.stringify(message6)}`);
                                            
                                post_message.post_message(config_json.cell_ips[6], port, message6, function(data6) {
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