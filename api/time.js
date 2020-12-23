const { config } = require("process");

function get_timestamp_sec() {
    return Math.floor(Date.now() / 1000);
}

function get_timestamp_ms() {
    return Date.now();
}


/*
This function determines the belonging of the timestamp to the current peirod.
RETURN VALUE:
-1: the timestamp expired
0: the timestamp is in the current period
1: the timestamp is from the future period
*/
// function timestamp_status(seal_period, timestamp) {
//     var current_timestamp = get_timestamp_sec();

//     // TODO: finish (if needed)
// }


function recent_report_due(config_json) {
    var seal_period = config_json.seal_period;
    var current_timestamp = get_timestamp_sec();
    return current_timestamp - current_timestamp % seal_period;
}

module.exports = { get_timestamp_sec, get_timestamp_ms, recent_report_due };