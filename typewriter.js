
const sentence = "hello there from lighthouse labs";

let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 100;

  // DONT KNOW WHY THIS DOESNT WORK
  // if (time === sentence.length * 100) {
  //   process.stdout.write('\n');
  // }
}

setTimeout(() => {
  process.stdout.write('\n');
}, time);

