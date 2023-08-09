const warnTheSheep = queue => {
  const wolfIndex = queue.indexOf("wolf");
  const sheepPosition = queue.length - wolfIndex - 1;
  return wolfIndex === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;        
};

//Duhnovskiy Oleksii
function warnTheSheep(queue) {
  return wolfIndex(queue) === queue.length - 1 ? "Pls go away and stop eating my sheep" : sheepToBeEaten(queue)
}

function wolfIndex(queue) {
  return queue.indexOf('wolf')
}

function sheepToBeEaten(queue) {
  const sheepNum = (queue.reverse().indexOf('wolf'));
  return `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`
}

