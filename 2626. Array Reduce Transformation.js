var reduce = function(nums, fn, init) {
    let value;

    if(nums.length > 0)
    {
        nums.forEach((val, i) => {
            value = fn(init, nums[i]);
            init = value;
        })
        return value;
    }

    return init;
};


let nums = [1,2,3,4];
let fn = function sum(accum, curr) { return accum + curr; };
let init = 0;

console.log(reduce(nums, fn, init));