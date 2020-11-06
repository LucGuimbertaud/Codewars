 function openOrSenior(data){
  let result = [];
  for(let i=0; i<data.length; i++){
     if(data[i][0] > 54 && data[i][1] > 7){
      result[i] = "Senior";
     }else{
      result[i] = "Open";
     }
  }
  return result;
}
