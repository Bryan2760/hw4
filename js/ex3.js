const values = [3, 11, 7, 2, 9, 10];

console.log(`Sum of all array values: ${values[0]+values[1]+values[2]+values[3]+values[4]+values[5]}`);

const MinMax = () => {
  let min = values[0], max = values[0]

  for (let i = 1; i < values.length; i++) {
    let value = values[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
  }

  return [min, max]
}

const [Min, Max] = MinMax()
console.log(`Minimum: ${Min}`);
console.log(`Maximum: ${Max}`)