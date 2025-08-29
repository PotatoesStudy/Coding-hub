# n * n 격자, m개 지점
n, m = map(int, input().split())
# 이게 표
grid = [list(map(int, input().split())) for _ in range(n)]
# 이게 가야할 지점
points = []
direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
for _ in range(m):
    x, y = map(int, input().split())
    points.append((x - 1, y - 1))
answer = 0
def search(x, y, check, pointIdx):
    if x == points[-1][0] and y == points[-1][1]:
        global answer
        if pointIdx == m:
            answer += 1
            return
        else:
            return
    for i in range(4):
        newX = x + direction[i][0]
        newY = y + direction[i][1]
        if newX < 0 or newX >= n or newY < 0 or newY >= n or check[newX][newY] or grid[newX][newY] == 1:
            continue
        else:
            check[newX][newY] = True
            if newX == points[pointIdx][0] and newY == points[pointIdx][1]: 
                search(newX, newY, check, pointIdx + 1)
            else:
                search(newX, newY, check, pointIdx)
            check[newX][newY] = False
check_arr = [[False] * n for _ in range(n)]
check_arr[points[0][0]][points[0][1]] = True
search(points[0][0], points[0][1], check_arr, 1)
print(answer)