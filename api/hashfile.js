const { assert } = require("console");

function write_hashfile(directory, data) {
    const hash = require("./hash");
    const file = require("./file");
    var digest = hash.keccak256_hash_no_prefix(data);
    filename = `${directory}/${digest}`;
    return file.write_file(filename, data);
}

function file_exists(directory, filename) {
    const fs = require('fs');

    try {
        fs.accessSync(`${directory}/${filename}`, fs.F_OK);
        return true;
    } catch (e) {
        return false;
    }

    assert(false);
}

module.exports = { write_hashfile, file_exists };