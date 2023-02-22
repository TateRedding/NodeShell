const fs = require("fs");

const cat = (fileName) => {
    fs.readFile(`./${fileName}`, (err, data) => {
        if (err) {
            throw err
        } else {
            process.stdout.write(data);
            process.stdout.write("\nprompt >");
        };
    });
};

module.exports = cat;