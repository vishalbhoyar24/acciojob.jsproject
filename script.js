function calculate(){
    var number1=document.getElementById("first").value;
    var number2=document.getElementById("second").value;
    var operator=document.getElementById("operator").value;
    if(operator ==='+'){
        var result= parseInt(number1)+parseInt(number2);
    }
    if(operator ==='-'){
        var result= parseInt(number1)-parseInt(number2);
    }
    if(operator ==='*'){
        var result= parseInt(number1)*parseInt(number2);
    }
    if(operator ==='/'){
        var result= parseInt(number1)/parseInt(number2);
    }
 
    document.getElementById("res").value = result;

}