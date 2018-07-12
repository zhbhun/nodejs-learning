const path = require("path");
const child_process = require("child_process");
const p = child_process.spawn(
  "node", // 需要执行的命令
  [path.resolve(__dirname, "./hello.js")], // 传递的参数
  {}
);
console.log("child pid:", p.pid);
p.on("exit", code => {
  console.log("exit:", code);
});

// 父进程的输入直接 pipe 给子进程（子进程可以通过 process.stdin 拿到）
// process.stdin.pipe(p.stdin);
// 子进程的输出 pipe 给父进程的输出
p.stdout.pipe(process.stdout);
// 子进程的错误输出 pipe 给父进程的错误输出
p.stderr.pipe(process.stderr);

// 或者通过监听 data 事件来获取结果
/*
var all = '';
p.stdout.on('data', data => {
    all += data;
});
p.stdout.on('close', code => {
    console.log('close:', code);
    console.log('data:', all);
});
 */
