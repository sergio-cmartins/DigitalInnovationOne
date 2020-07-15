const assert = require('assert');
const Math = require('../src/math.js');

let five;

describe('Math class', function(){
  //Hooks
  beforeEach(function() {
    a = 5;
  })

  it('Sum Numbers', function(){

    const math = new Math();

    assert.equal(math.sum(a,5), 10);

    //math.sum2(8,8, value);
    //assert.equal(value, 16);

  });
  
  //com skip este teste não é executado
  it.skip('Sum three numbers', function(){
    const math = new Math();

    a = 3
    assert.equal(math.sum(1,2,a), 6);
  });
  
  it('Sum numbers with callBack', function(done){
    const math = new Math();
    //Note que a variavel a voltou a valer 5 por conta do hook

    //Se o timeout de uma função assincrona for maior que 2000ms, setar manualmente para não dar erro
    //Também podemos colocar um timeout menor caso a função seja esperada a retornar em menos tempo
    this.timeout(500);

    math.sumCB((value) =>{
      assert.equal(value, 11);
      done(); //necessário para testar funcões assincronas, senão pode sempre retornar ok mesmo em caso de erro
    }, 1, 2, 3, a); 
  });

  //Com only apenas o metodo é chamado
  //it.only('Multiply Numbers', function(){
  it('Multiply Numbers', function(){
    const math = new Math();

    assert.equal(math.multiply(5,5,2), 50);
  });

  //Sem definição o teste é skipado
  it('Divisão de numeros')
});