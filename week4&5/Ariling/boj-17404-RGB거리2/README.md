# 🔎 RGB거리2

https://www.acmicpc.net/problem/17404

## 💡 아이디어

- dp를 활용하되 원형방식을 이용한다.

## ✔ 문제풀이

### 냅색 자체를 어려워하므로 이 부분은 자세히 적어두기

> 아래와 같은 dp방식을 **3번을 돈다**... <- 이 방식을 힌트로 봤다.

- 처음에 dp를 Infinity로 담아두고 시작하는 idx부분만 기존 arr값으로 할당한다.
- 그 아래는 규칙에 맞게 dp를 담는다.
  - 굳이 다음번까지 생각안해도 된다. 그 다음이 무조건 정해지기 때문이다.
- N번과 1번이 겹치기 않으려면 둘이 같은 인덱스만 아니면 된다.
  - 같은 인덱스가 아닌 경우만 기존 ans와 dp[n-1][j]를 비교하여 min값을 구한다.

## 🤕 어려웠던 점

- dp인것도 알았고 마지막 부분 아래에 처음 부분을 활용해서 dp를 활용하는 것도 알았지만 원형일때는 각각 돌아야한다는 것을 몰랐다.
