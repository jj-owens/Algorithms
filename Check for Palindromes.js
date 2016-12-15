function palindrome(str) {
    // Good luck!
    var lowerCaseString = str.toLowerCase();
    var noSymbolsString = lowerCaseString.replace(/[\W_]/g, '');
    var reverseString = noSymbolsString.split('').reverse('');
    var joinString = reverseString.join('');
    if (joinString === noSymbolsString){

        return true;

    }else
    {
        return false;
    }
}



palindrome("Balloon");