var map = function(arr, fn) {
    // let newArr = [];
    // for(let i = 0; i < arr.length; i++)
    // {
    //     newArr[i] = fn(arr[i], i);
    // }

    // return newArr;
    
    return arr.map((val, i) => fn(val, i)) //Another way
};

let arr = [1,2,3]; 
let fn = (n) => { return n + 1}; 

let ans = map(arr, fn);
console.log(ans);



// Question test case 1
// function plusone(n) { return n + 1; }
// [1,2,3]