function formatsMessageForReply(data){
  const { locale, status,  observation, trackedAt } = data;

  return `Local: ${locale} \nStatus: ${status} \nNota: ${observation || ''} \nData: ${trackedAt}`
}

module.exports = formatsMessageForReply;
