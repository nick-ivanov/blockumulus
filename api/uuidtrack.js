function register_uuid(uuid_directory, uuid) {
    console.log(`Registering UUID: ${uuid}`);
    const fs = require("fs");
    
    fs.open(`${uuid_directory}/${uuid}`, "w", function (err, fd) {
        fs.close(fd, function (err) {
            return false;
        });

        return true;
    });

    return true;
}

function uuid_used(uuid_directory, uuid) {
    const fs = require('fs')

    try {
        if (fs.existsSync(`${uuid_directory}/${uuid}`)) {
            console.log(`UUID has already been used: ${uuid}`);
            return true;
        } else {
            return false;
        }
    } catch(err) {
        return false;
    }
}

module.exports = { register_uuid, uuid_used };