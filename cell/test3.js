const uuidtrack = require("../api/uuidtrack");

if(uuidtrack.uuid_used("used_uuids", "89f9583b-32be-4a10-b7b8-acc490e76f5e")) {
    console.log("The first UUID has been used. - expected");
} else {
    console.log("The second UUID has NOT been used. - unexpected");
}

if(uuidtrack.uuid_used("used_uuids", "913746f9-c7d1-4564-bb4a-3af355bcb82a")) {
    console.log("The first UUID has been used. - unexpected");
} else {
    console.log("The second UUID has NOT been used. - expected");
}