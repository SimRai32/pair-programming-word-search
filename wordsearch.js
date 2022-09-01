const transpose = function(matrix) {

    let array = [];
    for (let i =  0; i < matrix[0].length; i++) {
      array.push([]);
    }
  
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        array[col][row]  = matrix[row][col];
      }
    }
    return array;
  
  };
  
  const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const vertical = transpose(letters);
    const verticalJoin = vertical.map(el => el.join(''))
  
    for (const v of verticalJoin) {
      if (v.includes(word)) {
        return true;
      }
      if(v.split("").reverse().join("").includes(word)) return true
    }
  
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
        if(l.split("").reverse().join("").includes(word)) return true
        
    }
    return false;
  }
  
  
  module.exports = wordSearch