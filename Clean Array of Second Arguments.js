
function destroyer(arr) {
    var numbers = Array.from(arguments);
    for (var i = 0; i < numbers[0].length; i ++){
        for (var j = 1; j < numbers.length; j ++){
            if (numbers[0][i] === numbers[j]){
                delete numbers[0][i];
            }
        }
    }
    return numbers[0].filter(function(z){
        return Boolean(z);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);