
function save_last_report(report_timestamp) {
    const time = require("../api/time");
    const file = require("../api/file");
    file.write_file("last_report.dat", report_timestamp)
}

function get_last_report() {
    const file = require("../api/file");
    ts = file.read_file("last_report.dat");
    return parseInt(ts, 10);
}

module.exports = { save_last_report, get_last_report }