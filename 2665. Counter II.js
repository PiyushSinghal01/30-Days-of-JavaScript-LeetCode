var createCounter = function(init) {
    var temp = init;

    // function increment(){
    //     return init += 1
    // }

    // function decrement(){
    //     return init -= 1;
    // }

    // function reset(){
    //     init = temp;
    //     return temp;
    // }

    return{
        increment : () => ++temp,
        decrement : () => --temp,
        reset : () => temp = init
    }
    
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
