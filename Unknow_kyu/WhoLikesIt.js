     function likes(names) {
  let response;
  if(names.length == 0){
  response="no one likes this";
  }else{
    if(names.length > 3){
      response = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }else{
    if(names.length == 1){
      response = names[0] + ' likes this'; 
    }else{
    if(names.length == 2){
      response = names[0] + ' and ' + names[1] + ' like this';
    }else{
    if(names.length == 3){
      response = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    }
    }
    }
    }
  }
  return response;
}
