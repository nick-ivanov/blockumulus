function forward_request(config_json, json_object) {
    const compose_message = require("../api/compose_message");
    const post_message = require("../api/post_message");
    
    console.log(`@foward_request json_object: ${JSON.stringify(json_object)}`);


    for(var i = 0; i < config_json.cell_ips.length; i++) {
        if(config_json.cell_ips[i] === config_json.this_ip) {
            continue;
        }

        var message = compose_message.compose_message (
            "FORWARD",
            config_json.cell_eth_addresses[i],
            "",
            { forwarded_message: json_object },
            config_json.ethereum_address,
            config_json.private_key
        );

        console.log(`Forwarding message to ${config_json.cell_ips[i]}: ${JSON.stringify(message)}`);

        //post_message.post_message(config_json.cell_ips[i], 3141, message);
    }


    return ;
}

module.exports = { forward_request };