

function main() {
    const hash = require("../api/hash");
    const contract = require("../api/contract");
    const conf = require("../api/conf");

    var blah_hash = hash.keccak256_hash("blahblah");
    console.log(blah_hash);

    var cell_config = conf.read_config("../cell/config.json");
    var private_key = cell_config.private_key;

    //console.log(`PRK: ${private_key}`);

    var contract_config = "../smart-contract/contract.json";

    var ret_value = contract.do_cell1_report (
            contract_config,
            private_key,
            1021,
            blah_hash
        );

    console.log(`Ret value: ${ret_value}`);
}

main()