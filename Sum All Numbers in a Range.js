
function sumAll(arr) {
    var maxValue = Math.max(arr[0],arr[1]);
    var minValue = Math.min(arr[0],arr[1]);
    var setArr = [];

    for (var i = minValue; i < maxValue + 1; i++){
        setArr.push(minValue);
        minValue += 1;
    }

    var sum = setArr.reduce(function(a, b){
        return a + b;
    });
    return sum;
}

sumAll([1, 4]);
