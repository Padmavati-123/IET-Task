function computecompare(){
    const op1=document.getElementById('num1').value;
    const op2=document.getElementById('num2').value;
    const operator=document.getElementById('operator').value;

    const op1num=parseFloat(op1);
    const op2num=parseFloat(op2);
    
    let result=false;

    const isop1num=!isNaN(op1num);
    const isop2num=!isNaN(op2num);

    if(isop1num^isop2num){
        document.getElementById('error-message').innerText=`These operands cannot be compared`;
    }
    else{
    if(operator==='>'){
        if(isop1num&&isop2num){
            result=op1num>op2num;
        }
        else{
            result=op1>op2;
        }
    }
    else if(operator==='<'){
        if(isop1num&&isop2num){
            result=op1num<op2num;
        }
        else{
            result=op1<op2;
        }
    }
    else if(operator==='>='){
        if(isop1num&&isop2num){
            result=op1num>=op2num;
        }
        else{
            result=op1>=op2;
        }
    }
    else if(operator==='<='){
        if(isop1num&&isop2num){
            result=op1num<=op2num;
        }
        else{
            result=op1<=op2;
        }
    }
    else if(operator==='=='){
        if(isop1num&&isop2num){
            result=op1num==op2num;
        }
        else{
            result=op1==op2;
        }
    }
    else if(operator==='!='){
        if(isop1num&&isop2num){
            result=op1num!=op2num;
        }
        else{
            result=op1!=op2;
        }
    }
    document.getElementById('result').innerText=`Result: ${result}`;
}
}

function selectOperator() {
    const operator = document.getElementById('operator');
    const dropdown = document.getElementById('dropdownMenu');
    const selectedOption = dropdown.querySelector('.selected');
    
    if (selectedOption) {
        operator.value = selectedOption.innerText; 
    }
    dropdown.style.display = 'none';
}

document.querySelectorAll('.dropdown-content a').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const operator = item.innerText;
        document.getElementById('operator').value = operator;

        document.getElementById('dropdownMenu').style.display = 'none';
    });
});

document.getElementById('arrowButton').addEventListener('click', function (e) {
    e.stopPropagation();
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('dropdownMenu');
    if (!dropdown.contains(e.target) && !document.getElementById('arrowButton').contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
