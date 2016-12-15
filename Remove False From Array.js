function bouncer(arr) {

    var resultLean = arr.filter(trueOrFalse);
    return resultLean;

}

function trueOrFalse(x){
    return (Boolean(x) === true);
}
console.log(
    bouncer([7, "ate", "", false, 9])
);
