import { ActivityType, Client, Events, GatewayIntentBits } from 'discord.js';
import { koroProfileSpiel } from './assets/spiels';
import { koroEmbed, koroPng } from './embeds';
import { config as loadConfig } from 'dotenv'
import { registerCommands } from './commands';


// Commit for redeploy on railway

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
   client.user?.setActivity("twitch.tv/korokrunch", { type: ActivityType.Watching })
});

client.on(Events.MessageCreate, msg => {
   const splitSentence = msg.content.toLowerCase().split(' ')
   console.log({ 'Author': msg.author.username, 'Message': msg.content })

   if (splitSentence.includes('<@187869208242028544>')) {
      msg.reply('Koro 😍')
   }

   if (splitSentence.includes('koro')) {
      msg.reply('Krunc 😳');
      msg.reply('Mars 🫣')
      msg.reply('Gar 🥵')
      msg.reply('Sheesh 😏')
      msg.reply('No cap 🤓')
   }
   else if (splitSentence.includes('kyle')) {
      msg.channel.send(koroProfileSpiel)
      msg.channel.send({ embeds: [koroEmbed], files: [koroPng] });
   }
   else if (splitSentence.includes('korokrunch')) {
    msg.channel.send("NAKSHUTA PARE https://www.twitch.tv/korokrunch IS STREAMING 😲 \n HOPE ON IN AND SAY 'POGI MO KORO' FOR A SPECIAL SHOUTOUT");
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