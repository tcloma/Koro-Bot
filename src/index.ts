import { Client, Events, GatewayIntentBits } from 'discord.js';
import { koroProfileSpiel } from './assets/spiels';
import { koroEmbed, koroPng } from './embeds';

const client = new Client({
   intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
   ]
});

client.on('ready', () => {
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

client.login('MTA1MzA2MTE0MjAyNjY2MTg5OA.Gcp49y.tNXcAW0UQ81TB64XJZxzzW2_YHkyFdVoMfwOvw')