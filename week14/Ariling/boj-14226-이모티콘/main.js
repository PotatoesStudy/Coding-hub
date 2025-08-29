const fs = require("fs");
const [input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const S = parseInt(input, 10);
const MAX = 2000;
const visited = Array.from({ length: MAX }, () => Array(MAX).fill(false));

function bfs() {
  const queue = [];
  queue.push({ screen: 1, clipboard: 0, time: 0 });
  visited[1][0] = true;

  while (queue.length) {
    const { screen, clipboard, time } = queue.shift();

    if (screen === S) return time;

    // 1. 복사
    if (!visited[screen][screen]) {
      visited[screen][screen] = true;
      queue.push({ screen: screen, clipboard: screen, time: time + 1 });
    }

    // 2. 붙여넣기
    if (
      clipboard > 0 &&
      screen + clipboard < MAX &&
      !visited[screen + clipboard][clipboard]
    ) {
      visited[screen + clipboard][clipboard] = true;
      queue.push({
        screen: screen + clipboard,
        clipboard: clipboard,
        time: time + 1,
      });
    }

    // 3. 삭제
    if (screen > 0 && !visited[screen - 1][clipboard]) {
      visited[screen - 1][clipboard] = true;
      queue.push({ screen: screen - 1, clipboard: clipboard, time: time + 1 });
    }
  }
}

console.log(bfs());
