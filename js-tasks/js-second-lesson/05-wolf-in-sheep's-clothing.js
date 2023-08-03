const warnTheSheep = queue => {
  const wolfIndex = queue.indexOf("wolf");
  const sheepPosition = queue.length - wolfIndex - 1;
  return wolfIndex === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;        
};

