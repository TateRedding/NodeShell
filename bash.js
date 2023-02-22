// Output a prompt
process.stdout.write("prompt > ");
const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");

// The stdin "data" event fires after a user types in a line
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); // remove the newline

    if (cmd === "pwd") {
        pwd();
    } else if (cmd === "ls") {
        ls();
    } else if (cmd.split(' ')[0] === "cat") {
        cat(cmd.split(' ')[1]);
    } else {
        process.stdout.write("You typed: " + cmd);
        process.stdout.write("\nprompt > ");
    };
});