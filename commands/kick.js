//kicks a user from the server
exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find("name", "Mods");
    if (!modRole)
      return console.log("The Mods role does not exist");
  
    //checks to make sure you have role to kick
    if (!message.member.roles.has(modRole.id))
      return message.reply("You can't use this command.");
    
    //you need to not have an empty message
    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to kick");
  
    //you need the permission to kick
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("");
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`);
    });
  };