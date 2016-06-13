//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = parseInt(document.getElementById("input1").value);
        var userinput2 = parseInt(document.getElementById("input2").value);
        var result = userinput1 + userinput2;
        //write output 1 onto webpage
        document.getElementById("demo").innerHTML = result;
    }  