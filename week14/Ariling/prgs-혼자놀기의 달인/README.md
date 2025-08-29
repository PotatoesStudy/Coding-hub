# 🔎 혼자놀기의 달인

https://school.programmers.co.kr/learn/courses/30/lessons/131130

## 💡 아이디어

- DFS로 풀기

## ✔ 문제풀이

- visited 배열을 만들고 groupSizes라는 배열을 만든다.
  - groupSizes는 그룹화를 하기 위해 필요한 배열이다.
- dfs함수를 만든다.
  - current값을 시작으로 while문을 돌며, 그 안의 카드에 적힌 번호에 해당하는 상자를 열고, 이 과정을 이미 열려있는 상자를 만날 때까지 반복한다.
  - count를 return한다.
- for문을 돌며 visited하지 않은 부분에 dfs를 돌며 연 상자들을 그룹화하여 push한다.
- 내림차순 정렬 후 가장 큰 두 그룹의 크기를 곱한 값을 반환한다.
  - 만약 length가 2개 미만이라면 0을 반환한다.

## 🤕 어려웠던 점

- 그냥 알고리즘 자체를 오랜만에 풀어서 그런지 모든게 어색했다 👀
