import { REST, Routes } from "discord.js";
import { config as loadConfig } from 'dotenv'

loadConfig();
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);

async function registerCommands() {
   const commands = [
      {
         name: 'koro',
         description: 'Replies with Krunc!',
      },
   ];
   try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID as string), { body: commands });

      console.log('Successfully reloaded application (/) commands.');
   } catch (error) {
      console.error(error);
   }
};

export { registerCommands }