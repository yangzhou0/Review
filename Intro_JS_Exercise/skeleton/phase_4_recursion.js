'use strict'
var range = (start,end) => {
  var result = [start];
  if (start === end) {return [end];}
  result=result.concat(range(start+1,end));
  return result;

}

var sumRec = (arr) => {
  if (arr.length === 0){return 0;}
  var sum = arr.pop();
  sum += sumRec(arr);
  return sum;
}


function exponent(base, exp) {
  if (exp === 0) {return 1;}
  let result = base * exponent(base,exp-1);
  return result;
}

function exponent2(base,exp){
  if (exp === 0){return 1;}
  else if (exp%2 === 0){
    return Math.pow(exponent2(base,exp/2), 2);
  }
  else {
    return Math.pow(exponent2(base, (exp - 1) / 2),2) * base;
  }
}
