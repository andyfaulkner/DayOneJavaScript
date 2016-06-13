//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        var userinput2 = parseInt(document.getElementById("input2").value);
        //work out the larger number
        var result = null;
        if (userinput1 === userinput2){
            result = "They are the same";
        } else {
            result = "They are different";
        }
        
        //write result onto webpage
        document.getElementById("demo").innerHTML = result;
    }  