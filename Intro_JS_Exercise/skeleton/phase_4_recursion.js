var range = (start,end) => {
  var result = [start];
  if (start === end) {return [end];}
  result=result.concat(range(start+1,end));
  return result;

}

sumRec(arr)
