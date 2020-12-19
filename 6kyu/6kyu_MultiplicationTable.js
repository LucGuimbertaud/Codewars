multiplicationTable = function(size) {
  var result = [];
      for (var idx_m = 1; idx_m <= size; idx_m++) {
        result.push(elemIncrease(idx_m, size));
      }
      return result;
    }

    function elemIncrease(incrNum, sizeNum) {
      var ret = []
        , sum = 0;
      for (var i = 0; i < sizeNum; i++) {
        sum += incrNum;
        ret.push(sum);
      }
      return ret;
}

