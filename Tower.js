function towerBuilder(nFloors) {
  let res = [];
  let star = "*";
  let space = " ";
  let count = 1;
  let spaceCount = 1;
  for(let i=0; i<nFloors; i++){
    res[i] = space.repeat(nFloors-spaceCount) + star.repeat(count) + space.repeat(nFloors-spaceCount);
    count = count + 2;
    spaceCount++;
  }
  return res;
}
