var uniqueInOrder=function(iterable){
   let sol = [];
  for(let i=0; i < iterable.length; i++){
    if(iterable[i] != iterable[i-1]){
      sol.push(iterable[i])
    }
  }
  return sol;
}
