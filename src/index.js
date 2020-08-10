require('dotenv/config');

const Telegraf = require('telegraf');
const { rastro } = require('rastrojs');

const status = require('./status');
const messageToArray = require('./messageToArray');
const formatsMessageForReply = require('./formatsMessageForReply');

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply("Bot running"))

bot.command('track', async (ctx) => {
    console.log(ctx.message);
    try {
      const trackingCodes = messageToArray(ctx.message.text);
      const trackList = await rastro.track(trackingCodes);

      console.log(trackList);

      const responses = trackList.map(async ({ tracks }) => {
        if(!tracks){
          return await ctx.reply('Código inválido');
        }

        const data = tracks[tracks.length-1];
        return await ctx.reply(formatsMessageForReply(data));
      });

      await Promise.all(responses);

    } catch(error) {
      console.error(error)
    }
})

const startBot = async () => {
    try {
        await bot.launch()
        console.log('Bot started successfully')
    } catch(error) {
        console.error(error)
    }
}

startBot()
