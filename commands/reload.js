//Reloads if a command is updated so you don't need to restart the bot
exports.run = (client, message, args) => {
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    try {
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
    }

    catch (err) {
      message.channel.send("Command does not exist or was not loaded");
    }
  };