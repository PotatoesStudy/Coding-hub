function solution(cards) {
  const visited = Array(cards.length).fill(false);
  const groupSizes = [];
  function dfs(start) {
    let count = 0;
    let current = start;
    // 그 안의 카드에 적힌 번호에 해당하는 상자를 열고, 이 과정을 이미 열려있는 상자를 만날 때까지 반복
    while (!visited[current]) {
      visited[current] = true;
      current = cards[current] - 1;
      count++;
    }
    return count;
  }
  for (let i = 0; i < cards.length; i++) {
    if (!visited[i]) {
      const size = dfs(i);
      // 연 상자들을 그룹화하여 push 하기
      groupSizes.push(size);
    }
  }
  // 내림차순 정렬 후 가장 큰 두 그룹의 크기를 곱한 값 반환
  groupSizes.sort((a, b) => b - a);
  return groupSizes.length >= 2 ? groupSizes[0] * groupSizes[1] : 0;
}
