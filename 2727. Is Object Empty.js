/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    // return _.isEmpty(obj);

    // Another way
    // if(obj.length <= 0)
    // {
    //     return true;
    // }
    // if(typeof obj === 'object')
    // {
    //     let keys = Object.keys(obj);
    //     return keys.length <= 0 ? true : false;
    // }

    return Object.keys(obj).length === 0;

};


let obj = {"x": 5, "y": 42};

console.log(isEmpty(obj));