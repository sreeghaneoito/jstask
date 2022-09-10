function array(arr) {
    let result = [];
  
    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
  
    return result;
  }
  
  let num = [1,2,3,4,1,2,3,1,2,4,1,5];
  
  console.log( array(num) );