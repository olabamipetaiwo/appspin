// Multidimensional Array
const matrix = Array.from({length: 5}, () => [0,0,0,0,0]);

// Flattened array -> ['00', '01', '02', ...'33', '34', ...'55']
const positions = [];
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix.length; col++) {
    positions.push(row + '' + col)
  }
}
const specialPositions = ['11', '22', '33', '44', '55'];

const handleWheelSpinning = () => {
  // Randomly selected position
  const randomPosition = positions[Math.floor(Math.random() * positions.length)];
  const [x, y] = randomPosition.split(''); 

  // Random 2-digit numbers btw 1-5
  const randomNumber1 = String(Math.floor(Math.random() * 5) + 1);
  const randomNumber2 = String(Math.floor(Math.random() * 5) + 1);
  matrix[x][y] = parseInt(randomNumber1 + randomNumber2);
  
  // Multiply the value generated if position is a special one
  if (specialPositions.includes(randomPosition)) {
    matrix[x][y] *= 1.5;
  }

  // delete the randomly selected position, 
  // so we can insert into another random position
  const index = positions.indexOf();
  if (index > -1) {
    positions.splice(index, 1);
  } 
}

// handleWheelSpinning()

// console.log(matrix)

var check = specialPositions.includes(String(11))
console.log(check)