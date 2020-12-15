function main() {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());

    app.use(bodyParser.json());

    app.post('/', function (req, res) {
        //console.log(req.body)

        json_object = req.body

        console.log(json_object);
        res.send({gar: "far"});
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
}

main();