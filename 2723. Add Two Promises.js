var addTwoPromises = async function(promise1, promise2) {
    // let a = await promise1;
    // let b = await promise2;

    // Another Way
    let [a, b] = await Promise.all([promise1, promise2]);
    
    return a + b;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then(console.log); // 4