//Repeats a message that was given
exports.run = (client, message, args) => {
    let text = message.content.slice(4); //cuts off the *say portion of the message
    message.channel.send(text);
}