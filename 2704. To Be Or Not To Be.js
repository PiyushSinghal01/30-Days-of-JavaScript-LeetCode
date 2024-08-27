var expect = function(val) {
    return {
        toBe : function toBe(sVal){
                    if(val === sVal)
                    {
                        return true;
                    }
                    else{
                        // throw "Not Equal";
                        throw new Error("Not Equal");
                    }
            },
        notToBe : function notToBe(sVal){
                    if(val !== sVal)
                    {
                        return true;
                    }
                    else{
                        // throw "Equal"
                        throw new Error("Equal");
                    }
            }
    }
    
    
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"