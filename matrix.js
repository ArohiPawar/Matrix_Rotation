var rotateMatrix = function(matrix) {
  flipMajorDiagonal(matrix);
  reverseEachRow(matrix);
  return matrix;
}

var flipMajorDiagonal = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}

var flipMinorDiagonal = function(matrix) {
    rotateMatrix(matrix);
     console.log(matrix);
}

var reverseEachRow = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
    return matrix;
}

var matrixInput = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var minorFlip = flipMinorDiagonal(matrixInput); 
