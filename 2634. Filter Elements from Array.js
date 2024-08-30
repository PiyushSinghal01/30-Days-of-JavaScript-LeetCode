var filter = function(arr, fn) {
    let filteredArr = [];

    arr.forEach((value, i) => {
        // if(fn(value, i))
        // {
        //     filteredArr.push(arr[i]);
        // }

        // Another way
        fn(value, i) && filteredArr.push(arr[i]);
    })

    return filteredArr;
};



let fn = function greaterThan10(n) { return n > 10; };
let arr = [0,10,20,30];

console.log(filter(arr, fn));