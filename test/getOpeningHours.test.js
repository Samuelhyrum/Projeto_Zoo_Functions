const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto:', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed" ', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('Para os argumentos Wednesday e 09:00-AM deve retornar a string "The zoo is closed" ', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('Mensagem de erro do Throw caso os minutos estejam errados', () => {
    expect(() => getOpeningHours('Wednesday', '09:-PM')).toThrow(new Error('The minutes should represent a number'));
  });
  it('Mensagem de erro do Throw caso o dia esteja errado', () => {
    expect(() => getOpeningHours('Wed', '09:00-PM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Mensagem de erro do Throw caso não tenha especificado "AM" ou "PM"', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-P')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Mensagem de erro do Throw caso a hora passada exceda 12:00 AM ou 12:00 PM', () => {
    expect(() => getOpeningHours('Thursday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Mensagem de erro do Throw caso os minutos passados não estejam entre 0 e 59', () => {
    expect(() => getOpeningHours('Thursday', '11:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
