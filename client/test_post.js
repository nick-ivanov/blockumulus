var Client = require('node-rest-client').Client;
 
var client = new Client();

var args = {
    data: { foo: "supercharged bar" },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://localhost:3000", args, function (data, response) {
    console.log(data);
    //console.log(response);
});