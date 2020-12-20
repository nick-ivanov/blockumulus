function call_app(bapp, request, callback) {
    const { spawn } = require("child_process");

    const bapp_dir = "/root/blockumulus/bapps";

    rss = request.split(" ");
    var A = [`${bapp_dir}/${bapp}/code.py`].concat(rss);

    const command = spawn(`pypy3`, A);

    var result = "";

    command.stdout.on('data', function(data) {
        result += data.toString();
   });
   command.on('close', function(code) {
        return callback(result);       
   });
}

module.exports = { call_app };