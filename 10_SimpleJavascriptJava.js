//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        var userinput2 = parseInt(document.getElementById("input2").value);
        
        //Evalulate the number
        var result = null;
        if (userinput1 > 10 && userinput2 > 10){
            result = "Both of the numbers is greater than 10!"
        } else if (userinput1 > 10 || userinput2 > 10) {
            result = "One of the numbers is greater than 10!"
        } else {
            result = "Neither of the numbers is greater than 10!"
        }
        
        //write result onto webpage
        document.getElementById("demo").innerHTML = result;
    }  