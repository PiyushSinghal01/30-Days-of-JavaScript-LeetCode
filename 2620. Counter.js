var createCounter = function(n) {
    
    return function() {
        n+=1;
        return n-1;

        // or we can return direct n++;
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12