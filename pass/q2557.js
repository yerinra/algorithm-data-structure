// Hello World!를 출력하시오.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => el);
  rl.close();
});

rl.on("close", function () {
  console.log("Hello World!");
  process.exit();
});
