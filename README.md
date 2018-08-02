# FrogBot
This is my project of creating a bot for discord with various uses through JavaScript. I have not worked with JavaScript before so I found this to be good practice for getting more familiar with the language. If you wish to make a discord bot of your own the resources I used are included below.

## Getting Started
These instructions will include what you need in order to begin working with your own bot.

### Prerequisites
* [Node.js](https://nodejs.org/en/) - Needed to run JavaScript, use version 6.0.0 or newer.
* [Discord bot](https://discordapp.com/developers/applications/me) - You will need to make your own bot application in order to get your own bot token

### Installing
First create your own bot by following the discord bot link above.
Then visit https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot , replacing APP_ID with the Client/Application ID from the app page, to add the bot to your server.

Download and unzip your project to wherever you want it to be located.

You will need your own config.json file to be in the main folder. This file will contain the bot's token ID, your desired prefix for commands, and the owner ID. It will look something like this:

```
{
  "token": "tokenIDGoesHere",
  "prefix": "!",
  "ownerID": "YourOwnerIDGoesHere"
}
```

You can run the bot through the command prompt within the main folder. The name may vary but it will look like this:
```
node frogbot.js
```

## Built with
* [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432) JavaScript IDE used
* [discord.js](https://discord.js.org/#/) Module used to interract with Discord's API

## Authors
* **Steven Ferrucci** - Creator - [SergeantFrog](https://github.com/SergeantFrog)
