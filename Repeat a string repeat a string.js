
function repeatStringNumTimes(str, num) {
    var string = '';
    while (num > 0){
        string += str;
        num--;
    }
    return string;
}
repeatStringNumTimes("abc", 3);