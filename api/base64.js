function base64_encode(data) {
    return Buffer.from(data).toString('base64');
}

function base64_decode(data) {
    //return Buffer.from(data, 'base64').toString('ascii');
    return Buffer.from(data, 'base64');
}

module.exports = { base64_encode, base64_decode };