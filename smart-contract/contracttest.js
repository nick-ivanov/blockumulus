

function main() {
    const hash = require("../api/hash");
    const contract = require("../api/contract");
    const conf = require("../api/conf");

    var blah_hash = hash.keccak256_hash("blahblah");
    var cell_config = conf.read_config("../../blockumulus-config/client-config.json");
    var private_key = cell_config.private_key;
    var contract_config = "../../blockumulus-config/contract-config.json";

    contract.do_cell1_report (
            contract_config,
            private_key,
            1031,
            blah_hash,
            function callback(result) {
                console.log(`TRANSACTION RESULT: ${JSON.stringify(result)}`);
                return;
            }
        );
        
    
}

main()