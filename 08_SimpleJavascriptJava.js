//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        var userinput2 = parseInt(document.getElementById("input2").value);
        var userinput3 = parseInt(document.getElementById("input3").value);
        //perform the two calculations
        var calcOne = (userinput1 + userinput2) * userinput3;
        var calcTwo = (userinput1 + userinput2 + userinput3);
        //Calculate the difference between the 2 values
        var result = calcOne - calcTwo;        
        
        //write result onto webpage
        document.getElementById("demo").innerHTML = result;
    }  