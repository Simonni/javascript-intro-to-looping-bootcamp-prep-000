// for loop
function forLoop(array){
for(var i=0; i<25; i++){
  if(i===1){
    array.push("I am 1 strange loop.");
  } else {
  array.push(`I am ${i} strange loops.`);
}
}
return array;
}


// while loop

function whileLoop(n){
let countdown = 20;
while (countdown < 0){
  countdown++;
  console.log(`${countdown} 'done'`);
}
}

// do while loop
var i = 0;
var arrary =[];
function incrementVariable(arrary){
  console.log();
}
do {i = i+1;
 array = array + 1;
} while (i===array.length > 0 && incrementVariable===array);
