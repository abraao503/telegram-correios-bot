function messageToArray(message){
  validType(message);

  let sliced = message.slice(7);

  return sliced.split(' ');
}

function validType(message){
  if(typeof message !== 'string') throw new Error('You must provide a string.');
}

module.exports = messageToArray;
