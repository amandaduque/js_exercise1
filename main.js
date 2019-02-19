let position = 0;
let direction = 'forward';

function moveForward (distance){
  if (direction === 'forward') {
    position += distance;
  } else {
    position -= distance;
  }
}

function moveBackward (distance){
  if (direction === 'forward') {
    position -= distance;
  } else {
    position += distance;
  }
}

function turnAround (){
  if (direction === 'forward') {
    direction = 'backward';
  } else {
    direction = 'forward';
  }
}

function printLocation(){
  console.log(position)
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();







// let position = 0;
// let distance = 0;
// let direction = 'east'

// "use strict"; {
// function moveForward(distance) {
//    if (direction === 'east') {
//         position += distance;
// } else {
//     position -= distance;
// }}

// function moveBackward(distance){
//     if (direction === 'east') {
//         position -= distance;
//     } else {
//         position += distance;
//     }
// }

// function printLocation (position) {
//     console.log(position);
// }
// }

// moveForward(5);
// moveBackward(1)
// printLocation()









// function moveBackward(){

// }

// function turnAround(){

// }

// function printLocation(){
//     function moveForward(){
//         console.log(`You are located here: ${position} position`);
//     }
    

// }


// function counter (start = 0) {
    //   let count = start;
    //   return function() {
    //     count++;
    //     console.log(count);
    //   }
    // }
    
    // const addOne = counter(5);
    // addOne();
    // addOne();
    // const addOneV2 = counter(102);
    // addOneV2();
    // addOneV2();
    // addOne();
    // addOne();