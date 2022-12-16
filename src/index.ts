import { Client, Events, GatewayIntentBits } from 'discord.js';
import { koroProfileSpiel } from './assets/spiels';
import { koroEmbed, koroPng } from './embeds';
import { config as loadConfig } from 'dotenv'
import { registerCommands } from './commands';


const client = new Client({
   intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
   ]
});
loadConfig();
registerCommands();

client.on(Events.ClientReady, () => {
   console.log(`Logged in as ${client!.user!.tag}!`);
});

client.on(Events.MessageCreate, msg => {
   const splitSentence = msg.content.toLowerCase().split(' ')

   if (splitSentence.includes('koro')) {
      msg.reply('Krunc 🥵');
   } else if (splitSentence.includes('kyle')) {
      msg.channel.send(koroProfileSpiel)
      msg.channel.send({ embeds: [koroEmbed], files: [koroPng] });
   }
});

client.on(Events.InteractionCreate, async interaction => {
   if (!interaction.isChatInputCommand()) return;

   switch (interaction.commandName) {
      case 'koro': {
         await interaction.reply({ content: 'Krunc 🥵' })
      }
   }

})

client.login(process.env.DISCORD_TOKEN)