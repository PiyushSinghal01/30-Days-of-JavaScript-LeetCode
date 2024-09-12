var join = function(arr1, arr2) {
    const result = {}; //empty object
    for(let i=0; i<arr1.length; i++){
    //arr1[0] = { id: 1, name: 'John' }
    //arr1[1] = { id: 2, name: 'Jane' }    
        result[arr1[i].id] = arr1[i]; //arr1[i].id --> 1
//goes through each object in arr1
//each id from arr1 is stored in result
    }

    for(let i=0; i<arr2.length; i++){
        if (result[arr2[i].id]) {
//If the id exists in both arr1 and arr2, this loop goes through each property (key) of the current object from arr2.
        for (const key in arr2[i]){
//updates the corresponding property in the result object with the value from arr2
            result[arr2[i].id][key] = arr2[i][key];
        }
        }else{
//the entire object from arr2 is added to result using its id as the key.
            result[arr2[i].id] = arr2[i];
        }
    }
//sorts this array in ascending order based on the id field. 
    return Object.values(result).sort((a,b)=>a.id- b.id);
};



let arr1 = [{"id": 1,"x": 1},{"id": 2,"x": 9}];
let arr2 = [{"id": 3,"x": 5}];


console.log(join(arr1, arr2));