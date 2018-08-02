//Evaluates a given command, only works if you are the owner
exports.run = (client, message, args) => {
    const config    = require("../config.json");
//this function blocks the use of @ symbols by adding a 0 width message between the @ and the message
const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  };


if (message.content.startsWith(config.prefix + "eval")) {
    if (message.author.id !== config.ownerID) return;
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {code: "xl"});
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
};