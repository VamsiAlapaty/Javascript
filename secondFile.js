console.log("This is second File");
//Count of candles that are big among other
let arr=[3,4,5,2,7,5,4,7,4,7];
let len = arr.length;
let count=0;
let high = arr[0];
for(let i of arr){
    if(high<i){
        high = i;
    }else if(high == i){
        console.log(high + " " + i);
        count++;
    } 
}
console.log(high);
console.log(count);