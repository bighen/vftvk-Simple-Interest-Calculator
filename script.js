function compute()
{
   var principal = document.getElementById("principal").value;
   if (principal<=0)
        {
        alert("Wprowadź dodatnią liczbę");
        document.getElementById("principal").focus();
        return;
        }
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);


   document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of \<b\>"+interest+",\</b\>\<br\>in the year "+year+"\<br\>"
   //document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "      +rate+"%\<br\>You will receive an amount of "+interest;

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function updateResult()
{
    var resultval = document.getElementById("result");
    var textResult = "Jeśłi wpłacisz depozyt " + document.getElementById("principal").value +
        "<br>ze stopą procentową " + document.getElementById("rate").value +
        "<br>otrzymasz wypłatę " + document.getElementById("interest").value +
        "<br>w roku " + year
        resultval.innerHTML = testResult;
}        