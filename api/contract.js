function do_cell1_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell1_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell2_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell2_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell3_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell3_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell4_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell4_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell5_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell5_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell6_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell6_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell7_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell7_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

function do_cell8_report(contract_json, private_key, timestamp, report_hash, callback) {
    const conf = require("../api/conf");
    contract_config_json = conf.read_config(contract_json);
    var Web3 = require('web3');
    infura_api_key=contract_config_json.infura_api_key;
    var web3 = new Web3("wss://" + contract_config_json.network + ".infura.io/ws/v3/" + infura_api_key);
    var account = web3.eth.accounts.privateKeyToAccount(private_key);
    web3.eth.accounts.wallet.add(account);
    var myContract = new web3.eth.Contract(contract_config_json.contract_abi, contract_config_json.smart_contract);
    
    var done = false;

    myContract.methods.do_cell8_report(timestamp, report_hash)
        .send({from: account.address, gas: contract_config_json.gas_limit, gasPrice: contract_config_json.gas_price})
        .on('transactionHash', function(hash){
            console.log("TNX HASH IS READY: " + hash);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            if(!done) {
                console.log("CONFIRMATION #: " + confirmationNumber);
                if(confirmationNumber >= contract_config_json.confirmations_needed) {
                    done = true;
                    return callback(receipt);
                }
            }
        })
        .on('error', console.error)
        .catch(err => {
            return callback(err.message);
        });
}

module.exports = { do_cell1_report, do_cell2_report, do_cell3_report, do_cell4_report, do_cell5_report, do_cell6_report, do_cell7_report, do_cell8_report };