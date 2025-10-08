const ball=document.getElementById('ball');

function play() {
  ball.style.animationPlayState='running';
}

function pause() {
  ball.style.animationPlayState='paused';
}

// ## 📚✨ Part 2: JavaScript Functions — Scope, Parameters & Return Values

function  add(num1, num2) {
  return num1 + num2;
  
}
let sum = add(19,20)
console.log(sum)