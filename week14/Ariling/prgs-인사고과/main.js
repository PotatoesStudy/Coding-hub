function solution(scores) {
  const [incentiveA, incentiveB] = scores[0];
  const total = incentiveA + incentiveB;
  // 조건에 맞게 정렬하기
  scores.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  let maxB = 0;
  let rank = 1;
  for (const [a, b] of scores) {
    if (a > incentiveA && b > incentiveB) return -1; // 완호보다 높은 사원이 존재하면 -1 반환하고 끝낸다.
    if (b >= maxB) {
      if (a + b > total) rank++;
      maxB = b;
    }
  }
  return rank;
}
