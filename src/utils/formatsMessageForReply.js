const moment = require('moment');
moment.locale('pt-BR');

function formatsMessageForReply(code, tracks){
  const { locale, status,  observation, trackedAt } = tracks;

  return `📟 <strong>Código:</strong> ${code}
👀 <strong>Status:</strong> ${status}
📍 <strong>Local:</strong> ${locale}
📜 <strong>Nota:</strong> ${observation || ''}
📅 <strong>Última atualização:</strong> ${moment(trackedAt).local().format('LLLL')}`
}

module.exports = formatsMessageForReply;
