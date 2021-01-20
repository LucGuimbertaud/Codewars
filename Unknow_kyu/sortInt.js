  function descendingOrder(n){
  let num = Array.from(String(n), String);
  num.sort(function(a, b){return b - a});
  let res = num[0];
  for(let i=1; i<num.length; i++){
    res = res + num[i];
  }
  return parseInt(res, 10)
}
