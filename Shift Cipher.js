
function rot13(str) { // LBH QVQ VG!
    str = str.split('').map(changeString);
    str = str.join('');


    return str;
}

function changeString(letter){
    var changeChar = /[^a-zA-Z]/g;
    if (changeChar.test(letter)){
        return letter;
    }
    var newChar = letter.charCodeAt(0);
    if (newChar > 77) {
        newChar -= 13;
    }
    else {
        newChar += 13;
    }
    return String.fromCharCode(newChar);

}




// Change the inputs below to test
rot13("SERR PBQR PNZC");