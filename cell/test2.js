const call_app = require("../api/call_app");

function main() {
    call_app.call_app("fastmoney", "transfer prqst3 nick bob 2",
        function(result) {
            console.log(result);
        }
    );
}

main();