const sentence = ' hello there from lighthouse labs';
let index = 0;

const typeWritter = function() {
  if (index < sentence.length) {
    process.stdout.write(sentence[index]);
    index++;
    setTimeout(typeWritter, 50);
  }
  if (index === sentence.length) {
    process.stdout.write('\n');
  }
};
typeWritter();