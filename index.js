require("dotenv").config();

const token = process.env.DISCORD_TOKEN;
const appID = process.env.APPLICATION_ID;

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
  console.log(`Connected as ${client.user.username} !`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(token);
