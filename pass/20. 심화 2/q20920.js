// 영단어 암기는 괴로워
// https://www.acmicpc.net/problem/20920

/*
자주 나오는 단어일수록 앞에 배치한다.
해당 단어의 길이가 길수록 앞에 배치한다.
알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
M 길이 이상의 단어만 외운다고 가정.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [length, ...arr] = input;
  length = length.split(" ").map(Number);
  let answer = arr
    .filter((voca) => voca.length >= length[1])
    .sort((x, y) => y.length - x.length);

  let map = new Map();
  for (let i of answer) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  let final = [...map].sort((x, y) => y[1] - x[1]);
  console.log(final.map((val) => val[0]).join("\n"));
  process.exit();
});

// 또 trim 문제....
/*
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
	let [N,M] = [input[0].split(' ')[0],input[0].split(' ')[1]]
    input.shift();
    
    let arr = input.filter((el)=>{ // [1]
      if(el.length >= parseInt(M)) return el;
    }).sort().sort((a,b)=>b.length - a.length)

    let map = new Map()
    for(let x of arr){ //[2]
      if(map.has(x)) map.set(x,map.get(x)+1)
      else map.set(x,1)  
    }
    
    let sortArr = [...map].sort((a,b)=>b[1]-a[1]) //[3]
    
    let sortTmp = []
    for(let x of sortArr){
      sortTmp.push(x[0]) //[4]
    }
    
    console.log(sortTmp.join('\n'))
*/
