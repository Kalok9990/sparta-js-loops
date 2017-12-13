//for loop
// var array = [1,2,3,4,5,6]
//
// for (var i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

//while loop
// var j = 0;
//
// while(j < 5){
//   console.log(j);
//   j++;
// }

//Do...while loop
// var number;
//
// do {
//   number = Math.random();
//   console.log(number);
// } while (number < 0.5);
//
// //for...in
// var myobject = new Object();
//
// myobject.a = "1";
// myobject.b = "2";
// myobject.c = "3";
//
// for(var key in myobject){
//   console.log(key);
//   console.log(myobject[key]);
// }

for(var i = 1; i <= 100; i++){
  if((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz");
  }else if(i % 3 == 0){
    console.log("Fizz");
  }else if (i % 5 == 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}
