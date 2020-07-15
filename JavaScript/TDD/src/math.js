class Math{
  sum(...args){
    return args.reduce((total,current) => total + current, 0)
  };
  sumCB(callback, ...args){
    setTimeout(() => {
      callback(args.reduce((total,current) => total + current, 0));
    }, 400);
  };
  multiply(...args){
    return args.reduce((total,current) => total * current, 1)
  };
  printSum(req, res, a, b){
    res.load('index', a + b);
  }
}

module.exports = Math;