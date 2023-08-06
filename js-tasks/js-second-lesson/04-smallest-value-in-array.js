// Maksym Zinchuk
function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  }
  return arr.indexOf(Math.min(...arr));
}
//Eremin Slava
function min(arr, toReturn) {
  if (toReturn === 'value') {
    const minValue = arr.reduce((acc, curr) => (acc < curr ? acc : curr), arr[0]);
    return minValue;
  }
  if (toReturn === 'index') {
    const minIndex = arr.indexOf(Math.min(...arr));
    return minIndex;
  }
  while (true) {
    const input = prompt("Введите 'value' или 'index':");
    if (input === 'value') {
      return min(arr, 'value');
    } else if (input === 'index') {
      return min(arr, 'index');
    }
  }
}

//Duhnovskiy Oleksiy
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return minValue(arr);
    }
  else { 
    return minValueIndex(arr)
    }
}

function minValue(arr) {
  let minimumValue = arr[0];
  for (num of arr) {
    if (minimumValue > num) { minimumValue = num } 
  } return minimumValue 
}

function minValueIndex(arr) {
  const minVal = minValue(arr);
  return arr.indexOf(minVal)
}


