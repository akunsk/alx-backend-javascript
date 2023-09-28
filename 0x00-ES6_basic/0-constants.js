export function getFirstTask() {
  const task = 'I favor using const when possible.';
  return task;
}

export function getLastPart() {
  return ' is acceptable';
}

export function getNextTask() {
  let combinedTask = 'However, occasionally I use let';
  combinedTask += getLastPart();

  return combinedTask;
}
