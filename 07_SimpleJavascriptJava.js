//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        var plusOne = ++userinput1
        var minusOne = --userinput1
        //write output 1 onto webpage
        document.getElementById("demo").innerHTML = "Number plus 1: "
        + plusOne + "<br>Number minus 1: " + minusOne;
    }  