function computeadd(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('output').innerText = 'Please Enter Valid Numbers';
        return;
    }

    const result = num1 + num2;
    document.getElementById('output').innerText = result;

}

function computesub(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('output').innerText = 'Please Enter Valid Numbers';
        return;
    }

    const result = num1 - num2;
    document.getElementById('output').innerText = result;

}
