//EASY
//Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.


array1 = [1,2,3,4,5,6,7,8,9,10];
array2= [5,10,12,3,4,8,6];

    function numbers(x){      
      let even = x.filter(num => num % 2 == 0) ;
        console.log(even);
      let odd = x.filter(num => num % 2 != 0)
        console.log(odd);
    }
    numbers(array1);
    numbers(array2);




//EASY2
function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  console.log(isPrime(5));
  var arr = [1, 5, 17, 25, 30];
  let primes = arr.filter(isPrime);
  console.log(primes);



//MEDIUM1

const vowels = ["a", "e", "i", "o", "u"];
function vowelChecker(x){
  for (let i = 0; i < vowels.length; i++){
    if(x === vowels[i]){ 

      return (`${x} is a vowel`); 
  }
    
  }
      return(`${x} is not a vowel`);
}

console.log(vowelChecker("u"));




//MEDIUM2
let string1 = `eat taco`;
let newstring1 = string1.split("").sort().join("");
let string2 = `tea tree`;
let newstring2 = string2.split("").sort().join("");

function checkAnagram(stringA, stringB) {
  if (stringA.length === stringB.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}


let string3 = `things are good`;
let newstring3 = string3.split("").sort().join("");
let string4 = `dogs eat ants`;
let newstring4 = string4.split("").sort().join("");

checkAnagram(newstring1, newstring2); // true 
checkAnagram(newstring3, newstring4); // false



//MEDIUM3
const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  
  console.log(gcd(78, 126));
  

  


//MEDIUM4
const car = {
    make: "Nissan", 
    model: "skyline",
    year: 2002,
    mileage: 2000,
    color:"pink",
    driveToWork: function (){
        console.log(`old mileage: ${car.mileage }`);
        car.mileage = car.mileage + 30;
        console.log(`new mileage: ${car.mileage}`);
    },
    runErrands: function (){
        console.log(`old mileage: ${car.mileage}`);
        car.mileage = car.mileage + 33;
        console.log(`new mileage: ${car.mileage}`);
    },
    driveAroundWorld: function (){
        console.log(`old mileage: ${car.mileage}`);
        car.mileage = car.mileage + 2400;
        console.log(`new mileage: ${car.mileage}`);
    }
}
car.driveToWork();
car.runErrands();
car.driveAroundWorld();




//HARD1

const balance = (str) =>{
    const array = [];
      const open = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
      }
      const closed = {
        '}': true,
        ']': true,
        ')' : true,
      }
      for ( let i = 0; i < str.length; i++){
        let check = str[i];
  
        if (open[check]){
          array.push(check);
        }else if(closed [check]){
          if(open[array.pop()] !== check){
            return false;
          }
        }
      }
      return array.length === 0;
  }
  console.log(balance("{hello}"));