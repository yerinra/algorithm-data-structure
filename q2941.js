// 크로아티아 알파벳
// ljes=njak
/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line.trim();
}).on("close", () => {
  let initial = input;
  let croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let t = [initial];
  let count = 0;
  croatian.forEach((v, i) => {
    input = input.split(v).join(" ");
    if (!t.includes(input)) {
      t.push(input.trim());
    }
    if (input == "") return;
  });

  let final = [...new Set(t)];

  if (final.length == 2 && final[final.length - 1] == "") {
    // 크아 같은 것 여러개로 구성..c=c= z=z= dz=dz=
    let str = croatian.filter((v) => v == final[0]);
    if (str[0]?.length === 3) count = Number(+initial.length / 3);
    else {
      count = Number(+initial.length / 2);

      // console.log(str, str.length);
    }
  } else if (final.includes("")) {
    // 크로아티안 알파벳으로만 구성 c=z= s=z=
    count =
      final.length -
      1 +
      t[t.length - 1].split("").filter((v) => v !== " ").length;
  } else {
    count =
      final.length -
      1 +
      t[t.length - 1].split("").filter((v) => v !== " ").length;
  }
  console.log(final);
  console.log(count);
  process.exit();
});
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line.trim();
}).on("close", () => {
  let croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (let i = 0; i < croatian.length; i++) {
    while (input.split("").filter((v) => v !== " ").length !== 0) {
      if (input.includes(croatian[i])) {
        input = input.replaceAll(croatian[i], "!");
      }
      break;
    }
  }

  console.log(input.length);
  process.exit();
});
