

function do_cell1_report(contract_json, private_key, timestamp, report_hash) {
    const conf = require("../api/conf");

    contract_config_json = conf.read_config(contract_json);

    var Web3 = require('web3');

    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);

    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);

    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    //myContract.methods.do_cell1_report(timestamp, web3.utils.hexToBytes(report_hash))
    //console.log({from: account.address, gas: contract_config_json.gas_offer});
    myContract.methods.do_cell1_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
    
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("CONF. #: " + confirmationNumber);
        })
        .on('receipt', function(receipt){
            console.log("RECEIPT IS READY: " + JSON.stringify(receipt));
            console.log("session_statuses.get(json_object.command.session): " + session_statuses.get(json_object.command.session));
        })
        .on('error', console.error)
        .catch(err => {
            console.log("ERROR: " + err.message);
        });
}

module.exports = { do_cell1_report };