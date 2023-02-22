const request = require("request");

const curl = (urlString) => {
    request(urlString, (err, res, body) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(body);
            process.stdout.write("\nprompt >");
        };
    });
};

module.exports = curl;