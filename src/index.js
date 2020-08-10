require('dotenv/config');
const Telegraf = require('telegraf');
const { rastro } = require('rastrojs');

const messageToArray = require('./utils/messageToArray');
const replyWithTrackingCodeData = require('./replyWithTrackingCodeData');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Hello"));

bot.command('track', async (ctx) => {
  try {
    const trackingCodes = messageToArray(ctx.message.text);
    const trackingCodeDataList = await rastro.track(trackingCodes);

    await replyWithTrackingCodeData(ctx.reply, trackingCodeDataList);
  } catch(error) {
    console.error(error)
  }
})

const startBot = async () => {
  try {
    await bot.launch();
    console.log('Bot started successfully');
  } catch(error) {
    console.error(error);
  }
}

startBot();
