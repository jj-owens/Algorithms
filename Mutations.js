
function mutation(arr) {
    var firstString = arr[0].toLowerCase();
    var secondString = arr[1].toLowerCase();

    for ( var i = 0; i < secondString.length; i++){
        while (firstString.indexOf(secondString[i]) < 0)
            return false;
    }

    return true;
}

mutation(["hello", "hey"]);