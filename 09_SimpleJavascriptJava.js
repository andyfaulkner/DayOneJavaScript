//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        
        //Evalulate the number
        var result = null;
        if (userinput1 < 0){
            result = "Number is negative!"
        } else if (userinput1 <= 10) {
            result = "Number is less than 10!"
        } else {
            result = "Number is greater than 10!"
        }
        
        //write result onto webpage
        document.getElementById("demo").innerHTML = result;
    }  