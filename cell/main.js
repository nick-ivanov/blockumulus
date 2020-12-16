function main() {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 3141;
    const base64 = require("../api/base64");
    const hashfile = require("../api/hashfile");

    app.use(bodyParser.urlencoded({ extended: true }));
    //app.use(bodyParser.json());
    app.use(bodyParser.raw());

    app.use(bodyParser.json({ limit: '50mb' }))

    app.post('/', function (req, res) {
        //console.log(req.body)

        json_object = req.body


        if(json_object.command.op === "UPLOAD") {
            console.log("Hey, upload request detected.");

            var decoded_data = base64.base64_decode(json_object.command.data.base64_blob);

            //console.log("Decoded data: " + decoded_data);

            console.log("Size: " + decoded_data.length);

            if(hashfile.write_hashfile("data", decoded_data) == true) {
                console.log("File written successfully.");
            } else {
                console.log("Error writing file.");
            }
        }


        if(json_object.command.op === "UPLOAD") {
            console.log("Hey, a transaction is detected.");
        }


        if(json_object.command.op === "ACCOUNT") {
            console.log("Hey, an account request is detected.");
        }


        if(json_object.command.op === "COHORT") {
            console.log("Hey, a cohort request is detected.");
        }


        //console.log(json_object);

        res.send({gar: "far"});
    })

    app.listen(port, () => {
        console.log(`Blockumulus Cell is listening at http://localhost:${port}`);
    });
}

main();