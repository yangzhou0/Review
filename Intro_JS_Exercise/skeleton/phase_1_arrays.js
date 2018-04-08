Array.prototype.uniq = function(){
  let result = [];
  let seen = {};
  this.forEach(value => {
    if (!seen[value]) {
      result.push(value);
      seen[value] = true;
    }
  })
  return result;
}

Array.prototypr.twoSum = function(){
  let seen = {};
  let result = [];
  this.forEach((value,i) => {
    if (seen[value]!==undefined){
      result.push([seen[value],i]);
    }
    else {
      seen[value] = i;
    }
  })
  return result;
}
