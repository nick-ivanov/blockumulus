
function read_config(config_json_file) {
    const fs = require('fs');

    try{
        var rawdata = fs.readFileSync(config_json_file);
    } catch (error){
        console.log("Could not open a configuration file.");
        return null;
    }
    
    try{
        var config_json = JSON.parse(rawdata);
    } catch (error){
        console.log("Could not parse data into JSON.");
        return null;
    }

    return config_json;
}

module.exports = { read_config };