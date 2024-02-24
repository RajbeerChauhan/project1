// function poem(){
//     console.log("Twinkle Twinkle liitle star")
//     console.log("How i wonder what you are")
//     console.log("up above the world so high")
//     console.log("Like a diamond in the sky")
// }

// poem()

// function rollDice(){
//     let math1=Math.floor(Math.random()*6)+1;
//     console.log(math1);
// }


// rollDice();

// function averageof3(x,y,z){
//     let avg=(x+y+z)/3;
//     console.log(Math.floor(avg));
// }
// averageof3(1,1,1);

// function mul(n){
//     console.log(`table of ${n}:`)
//         for(i=0;i<=10;i++){
//             multi=n*i;
//             console.log(`${n} * ${i} = ${multi}`)
//         }
// }
// let n=prompt("enter a number whose table we want")
// mul(n);

// function sum(n){
//         console.log(`sum of first ${n} numbers is:`)
//         sum1=0;
//         for(i=0;i<=n;i++){
//             sum1=sum1+i;
//         }
//         return sum1    
// }
// let n=prompt("enter a number")
// console.log(sum(n));


// function concat(array){
//         arr=[];
//         for (char in array){
//             arr=arr+array[char];
//         }
//         return arr;
// }
// array=["hello","hi","im","mr.mixmaster"];
// console.log(concat(array));

// const info = {
//     name:"LFC",
//     place:"solapur",
//     eng: 89,
//     phy:98,
//     getavg() {
//         let avg= (this.eng+this.phy)/2
//         console.log(avg)
//     }
// }