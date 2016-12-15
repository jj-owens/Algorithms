function findLongestWord(str) {

    var string = str.split(' ');
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i].length > count){
            count = string[i].length;
        }


    }
    return count;

}

findLongestWord("The quick brown fox jumped over the lazy dog");