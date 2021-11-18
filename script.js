//   Ikki sondan kattasi chiqaruvchi son
// function  max(a,b) {
//     if(a > b){
//         console.log("1chi son katta a = " + a);
//     }else if (a == b) {
//         console.log("Ikkisi teng");
//     }
//     else{
//         console.log("2chi son katta b = " + b);
//     }
// } 
// let a = prompt("1chi sonno kiriting...");
// let b = prompt("2chi sonno kiriting...");

// max(a,b);   

//   Ikki sondan kattasi chiqaruvchi son . Ternary operatori bilan
// function  max(a,b) {
//    return (a > b) ? "kattasi birinnchi son":"kattasi ikkinchi son";
// } 
// let a = prompt("1chi sonno kiriting...");
// let b = prompt("2chi sonno kiriting...");

// max(a,b);  
// let s = max(a,b); 
// console.log(s);

// fizzBuzz function ni yaratish;

// function fizzBuzz(input) {
//     if (typeof input !== 'number') {
//         console.log("son emas");        
//     }else if (input % 3 == 0 && input % 5 == 0) {
//         console.log("fizzBuzz");
//     }else if (input % 5 == 0) {
//         console.log("Buzz");
//     }else if (input % 3 == 0) {
//         console.log("fizz");        
//     }
//     else{
//         console.log(input);
//     }
// }
// // let input = prompt("Sonni kiriting..");
// fizzBuzz(11);

// mashinani tezligini belgilash.

// const speed = 70;
// const disPoint = 5
// const maxPoint = 12

// let disSpeed;

// function checkSpeed(liveSpeed) {
//     if(liveSpeed < speed +disPoint){
//         return "ok";
//     }   
//     else{
//         disSpeed = liveSpeed - speed;
//         point = Math.floor(disSpeed/disPoint);
//         if (point >= maxPoint) {
//             return "Guvohnoma olib qo'yiladi";
//         }
//         else{
//             return point;
//         }
//     }
   

// }
// let radar = checkSpeed(74);
// console.log(radar);

// 3 va 5 ga bolinadigan sonlarni yig'indisini hissoblovchi dastur tuzish.

// function sum(limit) {
//     let  threeArray = 0;
//     let  fiveArray = 0;
//     let  summa = 0;
//     for (let index = 0; index <= limit; index++) {
//         if (index % 3 == 0) {
//             threeArray += index;
//         }        
//         if (index % 5 == 0) {
//             fiveArray += index;
//         }
//     }
//     return summa = threeArray + fiveArray;
// }
// console.log(sum(99));

// talaba  bahosini chiqruvchi dastur

// const marks = [65, 74, 55, 79, 51];
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let avrg = calculateAverage(marks);

//     if (avrg < 50)   return 'F';
//     if (avrg < 60)   return 'D';
//     if (avrg < 70)   return 'C';
//     if (avrg < 80)   return 'B';
//     return 'A';

// }

// function calculateAverage(array) {
//     let sum = 0;
//     for(let value of array)
//         sum +=value;
    
//     let avrg = sum / marks.length;
//     return avrg;
// }

// tub sonlarni ajratuvchi dastur 

// showPrimeNumbers(20);

// function showPrimeNumbers(limit) {
//      for(let number = 2; number <= limit; number++)
//          if (isPrime(number)) console.log(number);
//     }
    
//     function isPrime(number) {
//         for(let factor = 2; factor < number; factor++)
//             if (number % factor === 0) return false;

//             return true;
            
//     }

// laptop objeckni tuzish

// let laptop = {
//     model: 'lenavo',
//     card: {
//         ram: '4GB',
//         hard: '512GB'
//     },
//     powerOn: function () {
//         console.log("on");
//     }
// }
// console.log(laptop)

// factory funcsiyasi yordanida obyetlar bilan ishlash

// function createLaptop(model, card) {
//     return {
//         model,
//         card,
//         powerOn(){
//             console.log("salom");
//         }
//     };
// }

// let laptop = createLaptop('lenavo', {ram:'4gb', hard:'512gb'});
// console.log(laptop);

// constructor funcsiyasi yordanida obyetlar bilan ishlash

function Laptop(cpu, ram, storage, screenSize, brand) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.screenSize = screenSize;
    this.brand = brand;
    this.powerOn = function() {
        console.log('salom');
    }
}

let laptop = new Laptop('i7', '16GB', {type: 'ssd', capacity: '1TB'}, 16, 'lenavo');
laptop.color = 'red';

console.log(laptop);
console.log("salom dsaydgasyfas yasfcasghcas hsgsaghcasvgh hgvchj");
