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
function timestamp_status(seal_period, timestamp) {
    var current_timestamp = get_timestamp_sec();

    // TODO: finish (if needed)
}

module.exports = { get_timestamp_sec, get_timestamp_ms, timestamp_status };