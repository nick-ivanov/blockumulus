
function main() {
    const hashfile = require("../api/hashfile");
    console.log(hashfile.write_hashfile(".", "Mary had a little lamb."));

    console.log(hashfile.file_exists(".", "c787877e6dcbebe26b0e7171708db382bab89de2784837c54bb2ddaa856ab01e"));
    console.log(hashfile.file_exists(".", "README.md"));
}

main();