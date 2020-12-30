const random_account = require("../api/random_account");

function main() {
    var A = random_account.generate_random_account();

    var prk = random_account.get_private_key(A);

    console.log(prk);

    var pba = random_account.get_public_address(A);

    console.log(pba);

}

main();