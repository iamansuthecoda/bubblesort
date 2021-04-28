var raw_numbers = document.getElementById('numbers');
var msg = document.getElementById('msg');

function triggerclick() {
    msg.innerText = null;
    result(sort(strToFlo(raw_numbers.innerText.replace(/\s/g, '').split(","))));
}

raw_numbers.addEventListener('keypress', () => {
    raw_numbers.innerText.replace(/\s/g, '').split(',').forEach((e) => {
        if (!/^[0-9\s.,-]*$/.test(e)) {
            msg.innerText = "Please Enter Numbers";
            document.getElementById('btn').disabled = true;
        } else {
            msg.innerText = null;
            document.getElementById('btn').disabled = false;
        }
        if (raw_numbers.innerText == "")
            msg.innerText = null;
    })
});

function sort(arr) {
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

    return arr;
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