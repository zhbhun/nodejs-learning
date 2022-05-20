const { EventEmitter } = require("events");
const heapdump = require("heapdump");

global.test = new EventEmitter();
heapdump.writeSnapshot("./before.heapsnapshot");

function run3() {
  const innerData = Buffer.alloc(100000);
  const outClosure3 = function () {
    console.log(innerData);
  };
  test.on("error", () => {
    console.log("error");
    outClosure3();
  });
}

for (let i = 0; i < 10; i++) {
  run3();
}
gc();

heapdump.writeSnapshot("./after.heapsnapshot");
