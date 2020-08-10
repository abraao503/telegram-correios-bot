const messageToArray = require('../../src/messageToArray');

describe('generation of tracking code array', ()  => {
  it('should return an array with unique tracking code when receive a user message', () => {
    expect(messageToArray('/track XYYYYYYYYYYYZ')).toEqual(['XYYYYYYYYYYYZ']);
  });

  it('should return an array with multiple tracking codes when receive a user message', () => {
    expect(messageToArray('/track XYYYYYYYYYYYZ ABBBBBBBBBBBC EFFFFFFFFFFFG')).toEqual(
      ['XYYYYYYYYYYYZ', 'ABBBBBBBBBBBC', 'EFFFFFFFFFFFG'],
    );
  });

  it('should return an error message of an invalid type', () => {
    expect(() => {
      messageToArray({ track: ['XYYYYYYYYYYYZ'] });
    }).toThrow('You must provide a string.');
  });
});
