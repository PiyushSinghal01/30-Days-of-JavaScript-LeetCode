var TimeLimitedCache = function () {
    this.cache = {}
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;

    const isExisting = this.cache[key] !== undefined;
    this.cache[key] = { value: value, expiration: expirationTime };

    return isExisting;
};

TimeLimitedCache.prototype.get = function (key) {
    const currentTime = Date.now()
    const entry = this.cache[key]

    if (entry && entry.expiration > currentTime) {
        return entry.value
    }

    delete this.cache[key]
    return -1
};

TimeLimitedCache.prototype.count = function () {
    const currentTime = Date.now()
    let validCount = 0

    for (const key in this.cache) {
        if (this.cache[key].expiration > currentTime) {
            validCount++
        } else {
            delete this.cache[key]
        }
    }

    return validCount
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
