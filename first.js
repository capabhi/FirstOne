var x= document.getElementById('event1');
var y= document.getElementById('event2');
var z= document.getElementById('result');
var f= document.getElementById('form1');


//x.value = "hello";

f.addEventListener('submit',function(event){
    if(!x.value || !y.value){
        alert("Please enter value to calculate");
    }
    else{
        var value1 =parseFloat(x.value); //converting to float
        var value2 = parseFloat(y.value); //as input is in text form
        var result=value1/value2;
        var precent=result * 100;
        z.innerText = "Answer "+ precent+ "%";
        event.preventDefault();  //to hold at page, as form has property that every time your press submit it refreshes the page and cuz of this we can't see answer
    }
});
