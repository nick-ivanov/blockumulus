function call_app(txn_uuid, from_address, bapp, request, callback) {
    const { spawn } = require("child_process");

    const bapp_dir = "/root/blockumulus/bapps";

    rss = request.split(" ");
    var A = [`${bapp_dir}/${bapp}/code.py ${txn_uuid} ${from_address}`].concat(rss);

    const command = spawn(`python3`, A);

    console.log(`COMMAND: ${A}`);

    var result = "";

    command.stdout.on('data', function(data) {
        result += data.toString();
   });
   command.on('close', function(code) {
        return callback(result);       
   });
}

module.exports = { call_app };