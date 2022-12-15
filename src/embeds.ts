import { AttachmentBuilder } from 'discord.js';

const koroPng = new AttachmentBuilder('src/assets/koroDapper.png')
const koroEmbed = {
   title: 'KruncMars (circa.2019)',
   image: {
      url: 'attachment://koroDapper.png',
   },
};

export { koroPng, koroEmbed }