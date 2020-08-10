const extra = require('telegraf/extra');
const style = extra.HTML();

const formatsMessageForReply = require('./utils/formatsMessageForReply');

async function replyWithTrackingCodeData(reply, trackingCodeDataList){
  const responses = trackingCodeDataList.map(async (data) => {
    if(data.isInvalid){
      return await reply(`O código ${data.code} não foi encontrado`);
    }

    const tracks = data.tracks[data.tracks.length-1];
    return await reply(formatsMessageForReply(data.code, tracks), style);
  });

  return await Promise.all(responses);
}

module.exports = replyWithTrackingCodeData;
