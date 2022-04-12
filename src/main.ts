import "reflect-metadata";
import { dirname, importx } from "@discordx/importer";
import { Interaction, Message } from "discord.js";
import { Intents } from "discord.js";
import { Client } from "discordx";
import * as dotenv from "dotenv";
dotenv.config();

export const client = new Client({
  botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],

  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],

  silent: false,

  simpleCommand: {
    prefix: "~",
  },
});

client.on("ready", async () => {
  await client.guilds.fetch();

  await client.initApplicationCommands();

  await client.initApplicationPermissions();

  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", (interaction: Interaction) => {
  client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
  client.executeCommand(message);
});

async function run() {
  await importx(dirname(import.meta.url) + "/{commands,events}/**/*.{ts,js}");

  if (!process.env.TOKEN) {
    throw Error("Could not find TOKEN environment variable");
  }

  await client.login(process.env.TOKEN);
}

run();
