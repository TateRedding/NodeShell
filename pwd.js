const pwd = () => {
    process.stdout.write(process.cwd());
    process.stdout.write("prompt > ");
};

module.exports = pwd;