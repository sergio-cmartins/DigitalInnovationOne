const Math = require('../src/math.js');
const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon');

//Pode se verificar todas as acerções do Chai em
// https://www.chaijs.com/api/

//Sinon é utilizado para criar mocks de funções
// https://sinonjs.org


let a;

describe('Math class', function(){
  //Hooks
  beforeEach(function() {
    a = 5;
  })

  it('Sum Numbers', function(){

    const math = new Math();

    //assert.equal(math.sum(a,5), 10);
    expect(math.sum(a,5)).to.equal(10);

  });
  
  //com skip este teste não é executado
  it.skip('Sum three numbers', function(){
    const math = new Math();

    a = 3
    assert.equal(math.sum(1,2,a), 6);
    //expect(math.sum(1,2,a)).to.equal(6);
  });
  
  it('Sum numbers with callBack', function(done){
    const math = new Math();
    //Note que a variavel a voltou a valer 5 por conta do hook

    //Se o timeout de uma função assincrona for maior que 2000ms, setar manualmente para não dar erro
    //Também podemos colocar um timeout menor caso a função seja esperada a retornar em menos tempo
    this.timeout(500);

    math.sumCB((value) =>{
      //assert.equal(value, 11);
      expect(value).to.equal(11);
      done(); //necessário para testar funcões assincronas, senão pode sempre retornar ok mesmo em caso de erro
    }, 1, 2, 3, a); 
  });

  it('Multiply Numbers', function(){
    const math = new Math();

    //assert.equal(math.multiply(5,5,2), 50);
    expect(math.multiply(5,5,2)).to.equal(50);
  });

  //Sem definição o teste é skipado
  it('Divisão de numeros')

  it('Testando propriedade', function(){
    const objAluno ={
      nome: 'Antonio Carlos',
      Id: 1256,
      sala: '1c'
    }

    //possivel testar propriedades e valores com chai expect
    expect(objAluno)
      .to.have.property('sala')
      .equal('1c');
  })

  //Com only apenas o metodo é chamado
  it.only('Testando response com sum e valores index', function(){
    const req = {};
    const res = {
      load: sinon.spy()
    };
    const math = new Math();

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;

  })

});