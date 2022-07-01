const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBe(expected);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Localizaçãos dos Elafantes no Zoo', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });
  it('Retornar a popularity', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBe(expected);
  });
  it('Retornar um array onde é possivel ver a disponibillidade dos elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Retornar undefined caso não tenha parametro', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('Retornar NUll caso tenha parametro invalido', () => {
    const actual = handlerElephants('ss');
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('Retornar Mensagem caso passe um numero ', () => {
    const actual = handlerElephants(8);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('Retornar Mensagem caso passe um numero ', () => {
    const actual = handlerElephants('id');
    const expected = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(actual).toEqual(expected);
  });
});
