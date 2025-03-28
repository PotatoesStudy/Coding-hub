# 🔎 풍선 터트리기

## 💡 아이디어

- 큰 값을 없애고 작은 값은 한 번 없애거나 안 없애도 됨
  - 중간을 전부 없애고 양극단 값은 무조건 살릴 수 있음
- 특정 값의 좌우 영역 최솟값이 둘 다 작으면 생존 불가 => 이외에는 모두 생존 가능

## ✔ 문제풀이

- 양극단 값은 무조건 산다는 가정
  - a 길이가 2여도 둘 다 살 수 있음
- 반복문 실행 때마다 양측 최솟값을 구하면 안됨
  - 왼: 작은 값을 만나면 갱신
  - 오: 각 인덱스 우측 최솟값 미리 계산

## 🤕 어려웠던 점

- 시간 초과.. 배열 크기가 매우 큼 주의 - O(N\*N) 불가, O(N)으로 해결해야 함
- 최솟값 계산 때문에 시간 초과가 많이 났었음..!

## 🤔 풀이 소감

- 특정 알고리즘이 매우 어렵다기보다는 문제에 풀이 조건 이해와 시간 초과를 위한 최적화가 중점적인 문제라고 생가함
- 문제를 풀이할 방식을 생각해내고 해당 방법이 시간 초과 없이 정답까지 가기가 어려운 문제인 듯
