
function confirmEnding(str, target) {
    var testSection = str.length - target.length;
    if (str.substr(testSection) === target){
        return true;
    } else
    {
        return false;
    }
}

confirmEnding("Bastian", "n");