// using `spawn` as example, can use other functions like `fork`, etc
// https://nodejs.org/api/child_process.html
const path = require("path");
const { spawn } = require("child_process");

const entry = path.resolve(__dirname, "app.js");

console.log(entry);

function spawnNodemon() {
  const cp = spawn("nodemon", [entry, "-w", entry], {
    // the important part is the 4th option 'ipc'
    // this way `process.send` will be available in the child process (nodemon)
    // so it can communicate back with parent process (through `.on()`, `.send()`)
    // https://nodejs.org/api/child_process.html#child_process_options_stdio
    stdio: ["pipe", "pipe", "pipe", "ipc"]
  });

  cp.stdout.on("data", function(data) {
    console.log("stdout: " + data);
  });
  cp.stderr.on("data", function(data) {
    console.log("stderr: " + data);
  });

  return cp;
}

var app = spawnNodemon();

app.on("message", function(event) {
  if (event.type === "start") {
    console.log(app.pid);
    console.log("nodemon started");
  } else if (event.type === "crash") {
    console.log("script crashed for some reason");
    console.log(event);
  }
});
// app.on('exit', function (event) {
//   console.log('app exit');
// });

// process.on("exit", function(event) {
//   console.log("process exit");
//   console.log(app.exit);
//   console.log(app.kill);
//   // process.exit(1);
//   // app.send("quit");
//   // app.kill("SIGINT");
// });

// force a restart
// app.send("restart");

// force a quit
// app.send("quit");
