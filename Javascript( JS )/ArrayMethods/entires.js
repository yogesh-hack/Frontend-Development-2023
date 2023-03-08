const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
for (const [index, value] of iterator) {
  console.log(index, value);
}
// 0 "a"
// 1 "b"
// 2 "c"
