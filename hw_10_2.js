var words = "Wonderful, Joyful, Happiness, Time, Task, Apple, Pathagonia, Cardinal, Homework, Surprise, Accordion";
var regex = /\b[b-z]{6,}/gi;
console.log(regex.test(words));
var res = words.match(regex);
console.log(res);