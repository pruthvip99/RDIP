function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}
function equal(){
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
    else{
        console.log('Something Wrong')
    }
}
function c(){
    document.form.textview.value = null;
}

function squareRoot()
{
    let val=document.form.textview.value;
    if(null!=val && ''!=val && expValidate(val))
    {
        document.form.textview.value = Math.sqrt(val);
    }
    else
    {
        alert("Select a valid number");
    }
}

function absoluteValue()
{
    let val=document.form.textview.value;
    if(null!=val && ''!=val && expValidate(val))
    {
        document.form.textview.value = Math.abs(val);
    }
    else
    {
        alert("Select a valid number");
    }                                   
}


function expValidate(val) {
    var isValid = false;
    var regex = /^[+,-]?[0-9\s]*[.]?[0-9\s]*$/;
    isValid = regex.test(val);
    return isValid;
}

function validateName(val)
{
    var isValid = false;
    var regex = /^[A-Z,a-z]/;
    isValid = regex.test(val);
    if(isValid)
    {
        return true;
    }
    else{
        alert("enter a valid Name")
    }
}

function validateNumber(val)
{
    var isValid = false;
    var regex = /^[0-9]{10}$/;
    isValid = regex.test(val);
    if(isValid)
    {
        return true;
    }
    else{
        alert("enter a valid phone number")
    }
}

function validateEmail(val)
{
    var isValid = false;
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    isValid = regex.test(val);
    if(isValid)
    {
        return true;
    }
    else{
        alert("enter a valid Email address")
    }
}

function palindrome(val) {
    var re = /[\W_]/g;
    var str = val.toLowerCase().replace(re, '');
    var reverseStr = str.split('').reverse().join(''); 
    if(reverseStr === str)
    {
       alert("Eentered String is a Palindrome ");
    }
    else{
       alert("Eentered String is not a Palindrome ");

    }
  }

  function anagram()
  {
      var enteredStr=document.getElementById("pAnagram1").value;
      var enteredWord=document.getElementById("pAnagram2").value;
      var rExp= /[\W_]/g;
      enteredStr=enteredStr.toLowerCase().replace(rExp,'');
      enteredWord=enteredWord.toLowerCase().toLowerCase(rExp,'');

      if (enteredStr.length !== enteredWord.length) {
       alert("ENTERD STRING IS NOT AN ANAGRAM OF ENTERD WORD");
    }
    else if(checkanagram(enteredStr,enteredWord))
    {
        alert("ENTERD STRING IS AN ANAGRAM OF ENTERD WORD");
    }
    else {
        alert("ENTERD STRING IS NOT AN ANAGRAM OF ENTERD WORD");
   
    }
  }


function checkanagram(str,val)
{
    let arrB = val.split("")

        for (let char of str ){ 
            if (!arrB.includes(char)) {
                return false
                break;
            } else {
                arrB.splice(arrB.indexOf(char), 1)
            }
        }

        return true
}

function checkSurvival()
{
    var val1=document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;

    var  num1=parseInt(val1) % 3;
    var num2=parseInt(val2) % 3;
    survival(num1,num2);

}



function survival(num1,num2)
{
    if(num1==num2)
    {
        alert("TIE");
    }
   else if((num1==0 && num2==1 ) ||(num2==0 && num1==1 ) )
    {
        alert("Human");
    }
    else if((num1==1 && num2==2) || (num2==1 && num1==2))
    {
        alert("Cockroach");
    }
    else if((num1==0 && num2==2) || (num2==0 && num1==2))
    {
        alert("Nuclear Bomb");
    }
}