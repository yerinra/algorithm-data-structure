let input = ["a", "b", "c"];
let count = 0;

function permutation(arr, s, r) {
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]];
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]];
  }
}

permutation(input, 0, 2);
// permutation(["a", "b", "c", "d"], 0, 3);
console.log(count);
