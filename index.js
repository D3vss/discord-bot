require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
  console.log(`Connected as ${client.user.id}!`);
});

client.login(process.env.DISCORD_TOKEN);
