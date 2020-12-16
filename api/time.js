function get_timestamp_sec() {
    return Math.floor(Date.now() / 1000);
}

function get_timestamp_ms() {
    return Date.now();
}

module.exports = { get_timestamp_sec, get_timestamp_ms };