//random number
console.log(Math.random());
// random number*6
console.log(Math.random()*6);

//round the value down to the nearest integer
console.log(Math.floor(Math.random() * 6));
// rolling dice 
console.log(Math.floor(Math.random() * 6)+1);
//head or Tail
if (Math.random() < 0.5) {
    console.log("heads!");
  } else {
    console.log("tails!");
  } 
