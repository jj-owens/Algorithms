
function chunkArrayInGroups(arr, size) {

    var chunks = [];
    var output = [];

    for (var a in arr) {
        if (a % size !== size - 1)
            chunks.push(arr[a]);
        else {
            chunks.push(arr[a]);
            output.push(chunks);
            chunks = [];
        }
    }

    if (chunks.length !== 0)
        output.push(chunks);
    return output;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
