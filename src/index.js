const updateNotifier = require("update-notifier")
const pkg = require("../package.json")
updateNotifier({ pkg }).notify()

module.exports = {
    version: pkg.version,
    AmariBot: require("./AmariBot"),
    structures: require("./structures"),
}

/*
Hi, welcome to looking in my code.
Any questions? Shoot me a message in the AmariBot Support server! TheShadow#8124
or just shoot me
that too
*/
