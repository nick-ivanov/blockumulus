function compose_message(op, to, ref, data, public_address, private_key) {
    const { v4: uuidv4 } = require('uuid');
    const ecdsa = require("./ecdsa");
    const time  = require("./time");

    var command_object = Object();
    command_object.from = public_address;
    command_object.to = to;
    command_object.op = op;
    command_object.uuid = uuidv4();
    command_object.ref = ref;
    command_object.timestamp = time.get_timestamp_sec();
    command_object.data = data;
    command_signature = ecdsa.sign_message(JSON.stringify(command_object), private_key);

    var data =  {
        command: command_object,
        signature: command_signature
    };

    return data;
}

module.exports = { compose_message };