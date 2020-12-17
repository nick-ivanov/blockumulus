function post_message(address, port, message) {
    var Client = require('node-rest-client').Client;
    var client = new Client();

    var args = {
        data: message,
        headers: { "Content-Type": "application/json" }
    };
    
    client.post(`http://${address}:${port}`, args, function (data, response) {
        console.log(data);
        //console.log(response);
    });
}

module.exports = { post_message };