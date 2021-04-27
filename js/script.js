var raw_numbers = document.getElementById('numbers');
var msg = document.getElementById('msg');

function triggerclick() {
    msg.innerText = null;
    sort(raw_numbers.innerText.replace(/\s/g, '').split(","));
}

raw_numbers.addEventListener('keypress', () => {
    raw_numbers.innerText.replace(/\s/g, '').split(',').forEach((e) => {
        if (/^[0-9\s.,]*$/.test(e)) {
            msg.innerText = null;
            document.getElementById('btn').disabled = false;
        } else {
            msg.innerText = "Please Enter Numbers";
            document.getElementById('btn').disabled = true;
        }
    })
});

function sort(arr) {
    //converting from string to float
    arr = strToFlo(arr);

    //sorting
    var i, j;
    var len = arr.length;
    var isSwapped = false;
    for (i = 0; i < len; i++) {
        isSwapped = false;
        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }

    //Displaying result
    result(arr);
}

function strToFlo(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
    }
    return arr;
}

function result(arr){
    msg.innerHTML = null;
    for (let k = 0; k < arr.length; k++) {
        k == arr.length - 1 ? msg.innerHTML += arr[k] : msg.innerHTML += arr[k] + "&nbsp<&nbsp";
    }
}