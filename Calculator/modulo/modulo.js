function computemodulo(){
    const num1=parseInt(document.getElementById('num1').value);
    const num2=parseInt(document.getElementById('num2').value);
     
    if(isNaN(num1)|| isNaN(num2)){
        document.getElementById('error-message').innerText='Fields cannot be empty';
        return;
    }
    const result=num1%num2;
    document.getElementById('result').innerText=`Result: ${num1} modulo ${num2} is ${result}`;
    document.getElementById('error-messa ge').innerText=``;
    if(isNaN(result)){
        document.getElementById('error-message').innerText=`${num1} cannot be divided by ${num2}`;
        return;
    }
}