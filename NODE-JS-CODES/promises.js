function fullName(callback) {
    console.log("Shahid");
    callback();
}
function details() {
    console.log("Full Stack Developer");
}

fullName(details);

