function alertbox() {
    alert ("Welcome to my Website");
}
function mainheading() {
    
    if(document.getElementById('main').style.color == "yellow") {
        document.getElementById('main').style.color = "green";
        document.getElementById('tvshow').innerHTML = "Play now";
    }
    else {
        document.getElementById('main').style.color = "yellow";
        document.getElementById('tvshow').innerHTML = "Its here";
    }
    setTimeout(mainheading, 1000);
}
mainheading();
function getresult() {
    function getvalue(a) {
        var radiob = document.getElementsByName(a);
        if (radiob[0].checked) {
            return Number(radiob[0].value);
        }
        if (radiob[1].checked) {
            return Number(radiob[1].value);
        }
        if (radiob[2].checked) {
            return Number(radiob[2].value);
        }
        if (radiob[3].checked) {
            return Number(radiob[3].value);
        }
    }
   var username =  document.getElementById('username').value;
   if(username == "") {
       document.getElementById('answers').innerHTML = "Please enter your name";
       document.getElementById('answers').style.color = "red";
       return false;
   }
   if (
       document.getElementById('q1a1').checked == false &&
       document.getElementById('q1a2').checked == false &&
       document.getElementById('q1a3').checked == false &&
       document.getElementById('q1a4').checked == false 
   ) {
    document.getElementById('answers').innerHTML = "Please answer the first questions";
    document.getElementById('answers').style.color = "red";
    return false;
   }
   if (
       document.getElementById('q2a1').checked == false &&
       document.getElementById('q2a2').checked == false &&
       document.getElementById('q2a3').checked == false &&
       document.getElementById('q2a4').checked == false 
   ) {
    document.getElementById('answers').innerHTML = "Please answer the second questions";
    document.getElementById('answers').style.color = "red";
    return false;
   }
   if (
       document.getElementById('q3a1').checked == false &&
       document.getElementById('q3a2').checked == false &&
       document.getElementById('q3a3').checked == false &&
       document.getElementById('q3a4').checked == false 
   ) {
    document.getElementById('answers').innerHTML = "Please answer the third questions";
    document.getElementById('answers').style.color = "red";
    return false;
   }
   if (
       document.getElementById('q4a1').checked == false &&
       document.getElementById('q4a2').checked == false &&
       document.getElementById('q4a3').checked == false &&
       document.getElementById('q4a4').checked == false 
   ) {
    document.getElementById('answers').innerHTML = "Please answer the fourth questions";
    document.getElementById('answers').style.color = "red";
    return false;
   }
   if (
    document.getElementById('q5a1').checked == false &&
    document.getElementById('q5a2').checked == false &&
    document.getElementById('q5a3').checked == false &&
    document.getElementById('q5a4').checked == false 
) {
 document.getElementById('answers').innerHTML = "Please answer the fifth questions";
 document.getElementById('answers').style.color = "red";
 return false;
}
   
    var score = getvalue('answer1') + getvalue('answer2') +  getvalue('answer3') +  getvalue('answer4') +  getvalue('answer5');
    if(score == 0) {
        
        document.getElementById('answers').innerHTML = username + " your score is "  +score ;
        document.getElementById('answers').style.color = "red";
    }
    if (score == 1  ||  score == 2) {
        
        document.getElementById('answers').innerHTML = username + " your score is "  +score+ " Try harder ";
        document.getElementById('answers').style.color = "yellow";
    }
    if(score == 3  ||  score == 4) {
        document.getElementById('answers').innerHTML = username + " your score is "  +score+ " Almost there!!! ";
        document.getElementById('answers').style.color = "blue";
    }
    if(score == 5) {
        document.getElementById('answers').innerHTML = username + " your score is "  +score+ " congratulations!!!! ";
        document.getElementById('answers').style.color = "green";
    }

   
}
function calculate_the_value() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var operation = document.getElementById('operation').value;
    if (number1 == "" || number2 == "") {
        alert ('Please fill in the numbers');
        return false;
    }
    var result;
    if (operation == '+') {
        result = Number(number1) + Number(number2);
    }
    else if (operation == '-') {
        result = Number(number1) - Number(number2);
    }
    else if (operation == '*') {
        result = Number(number1) * Number(number2);
    }
    else  {
        result = Number(number1) / Number(number2);
    }
    document.getElementById('numbers').innerHTML = " Answer is " + result;
}
