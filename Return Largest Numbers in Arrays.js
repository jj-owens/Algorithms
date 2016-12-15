function largestOfFour(arr) {

    arr.forEach(function(firstArray){
        return firstArray.sort(function(a, b) {
            return b - a;
        });
    });

    arr.forEach(function(firstArray){
        return firstArray.splice(1, 3);
    });
    arr = arr.reduce(function(firstArray, secondArray){
        return firstArray.concat(secondArray);
    });
    return arr;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);