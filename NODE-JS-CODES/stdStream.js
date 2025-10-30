process.stdin.on("data", data => {
    data = data.toString().toUpperCase();
    process.stdout.write("Converted to UpperCase: " + data + "\n");
});

process.stderr.write("Enter a Word: ");