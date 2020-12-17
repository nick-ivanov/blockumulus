var Web3 = require('web3');

infura_api_key="ef1ce1202d8248a69d1eacd3a6237f28"
var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);

var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);

timestamp = 1234567;
hash = "0x4e03657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45";

myContract.methods.do_cell1_report(timestamp, web3.utils.hexToBytes(hash))
    .send({from: account.address, gas: config_json.gas_offer})
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

function do_cell1_report() {

}
