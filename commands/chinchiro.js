//rolls 3 die for chinchiro
exports.run = (client, message, args) => {
    var text = "";
    for(var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 6 + 1);
        switch(num) {
            case 1:
                text += ":one: ";
                break;
            case 2:
                text += ":two: ";
                break;
            case 3:
                text += ":three: ";
                break;
            case 4:
                text += ":four: ";
                break;
            case 5:
                text += ":five: ";
                break;
            case 6:
                text += ":six: ";
                break;
            default:
                text = "You busted!"
        }
    }

    message.channel.send(text);
}