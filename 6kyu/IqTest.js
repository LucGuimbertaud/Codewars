iqTest("2 4 7 8 10");




function iqTest(numbers){
    let res = numbers.split(" ");
    for(let i=0; i<numbers.length; i++){
        if(parseInt(res[i])%2){
            return (i+1);
        }
    } 
}

