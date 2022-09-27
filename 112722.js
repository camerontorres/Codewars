function betterThanAverage(classPoints, yourPoints) {
  const totalPoints = classPoints.reduce((a, b) => a + b, 0);
  const classAvg = totalPoints / classPoints.length;
  const result = yourPoints > classAvg;
  return result;
}
