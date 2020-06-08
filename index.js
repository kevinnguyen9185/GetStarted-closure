// Import stylesheets
import './style.css';

function greeting(msg) {
  return function who(name) {
    console.log(`${msg} - ${name}`);
  }
}

var hello = greeting('hello');

hello('kevin');
hello('Grace');

function counter(step=1) {
  var count = 1;
  return function cal() {
    count += step;
    return count;
  }
}

var inc1 = counter(1);
console.log(inc1());
console.log(inc1());

var inc12 = counter(1);
console.log(inc12());

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');

var buttons = [b1, b2, b3];

for(let i = 0; i<buttons.length ; i ++) {
  buttons[i].addEventListener('click', function onClick() {
    console.log(`click on button ${i}`);
  });
  console.log(i);
}