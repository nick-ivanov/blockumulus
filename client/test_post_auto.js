const post_command = require("../api/post_command");
const conf = require("../api/conf");


function main() {
    config_object = conf.read_config("config.json");
    post_command.post_command("localhost", "3000", "txn", {foo: "bar"}, config_object.ethereum_address, config_object.private_key);
}

main();