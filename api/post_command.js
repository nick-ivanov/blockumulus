function post_command(address, port, op, data, public_address, private_key) {
    const { v4: uuidv4 } = require('uuid');
    const ecdsa = require("./ecdsa");
    var Client = require('node-rest-client').Client;
 
    var client = new Client();

    var command_object = Object();
    command_object.from = public_address;
    command_object.uuid = uuidv4();
    command_object.op = op;
    command_object.data = data;
    command_signature = ecdsa.sign_message(JSON.stringify(command_object), private_key);

    var args = {
        data: {
            command: command_object,
            signature: command_signature
        },
        headers: { "Content-Type": "application/json" }
    };
    
    client.post(`http://${address}:${port}`, args, function (data, response) {
        console.log(data);
        //console.log(response);
    });
}

module.exports = { post_command };