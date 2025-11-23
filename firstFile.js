//Find the lowest value in the array
let arr=[78,98,112,34,39,23,56,4,17,48];
let len = arr.length;
let value = arr[0];
for(i of arr){
    if(value > i){
        value=i;
    }
}
console.log(value);