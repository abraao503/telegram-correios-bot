const Telegraf = require('telegraf');

function CreateBot(){
  const bot = new Telegraf(process.env.BOT_TOKEN);

  if(process.env.NODE_ENV === 'production'){
    bot.telegram.setWebhook(`${process.env.DEPLOY_URL}/bot${process.env.BOT_TOKEN}`);
    bot.startWebhook(`/bot${process.env.BOT_TOKEN}`, null, process.env.PORT);
    console.log(process.env.DEPLOY_URL);
  }

  return bot;
}

module.exports = CreateBot;
