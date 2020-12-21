function post_message(address, port, message, callback) {
    var Client = require('node-rest-client').Client;
    var client = new Client();

    var args = {
        data: message,
        headers: { "Content-Type": "application/json" }
    };
    
    var req = client.post(`http://${address}:${port}`, args, function (data, response) {
        // console.log(`DATA: ${JSON.stringify(data)}`);
        //console.log(`RESPONSE: ${JSON.stringify(response)}`);
        return callback(data);
    });

    req.on('requestTimeout', function (req) {
        console.log('request has expired');
        req.abort();
    });
     
    req.on('responseTimeout', function (res) {
        console.log('response has expired');
    });
     
    req.on('error', function (err) {
        console.log('request error', err);
    });
}

module.exports = { post_message };