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

var fibonacci = (n) => {
  if (n === 2) {return [1,1]}
  else if (n === 1) {return [1];}
  var last = fibonacci(n-1).pop() + fibonacci(n-2).pop();
  var result = fibonacci(n-1);
  result.push(last);
  return result;
}

var deepDup = function(arr){
  if (type(arr) !== 'Array'){return arr;}
  return arr.map(el => deepDup(el));

}
function type(el){
  return Object.prototype.toString.call(el).slice(8,-1);
}

var bsearch = (arr, target) => {
  if(arr.length === 0){return -1;}
  let middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) {return middle;}
  else if (target < arr[middle]) {
    let left = arr.slice(0,middle);
    return bsearch(left,target);
  }
  else{
    let right = arr.slice(middle + 1);
    let pos = bsearch(right,target);
    return pos === -1 ? -1 : pos + middle + 1;
  }
}

function mergesort(arr){
  if (arr.length === 1) {return arr;}
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  let sortedleft = mergesort(left);
  let sortedright = mergesort(right);
  return merge(sortedleft,sortedright);
}

var merge = (left,right) => {
  let result = [];
  while (left.length > 0 && right.length > 0){
    let comp = left[0] - right[0]
    comp < 0 ? result.push(left.shift()) : result.push(right.shift());
  }
  return result.concat(left,right);
}
