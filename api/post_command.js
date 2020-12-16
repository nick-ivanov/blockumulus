function post_command(address, port, op, ref, data, public_address, private_key) {
    const { v4: uuidv4 } = require('uuid');
    var Client = require('node-rest-client').Client;
    var client = new Client();

    const ecdsa = require("./ecdsa");
    const time  = require("./time");

    var command_object = Object();
    command_object.from = public_address;
    command_object.op = op;
    command_object.uuid = uuidv4();
    command_object.ref = ref;
    command_object.timestamp = time.get_timestamp_sec();
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