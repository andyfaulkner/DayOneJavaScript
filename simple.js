//Event listener
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myFirst,false);
    function myFirst(){
        //Get user input
        var userinput1 = document.getElementById("input1").value;
        //write output 1 onto webpage
        document.getElementById("demo").innerHTML = userinput1;
    }