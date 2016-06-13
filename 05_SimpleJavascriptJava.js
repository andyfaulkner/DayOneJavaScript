//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        var userinput2 = parseInt(document.getElementById("input2").value);
        //work out the larger number
        var result = 0;
        if (userinput1 > userinput2){
            result = userinput1;
        } else {
            result = userinput2;
        }
        
        //write result onto webpage
        document.getElementById("demo").innerHTML = result;
    }  