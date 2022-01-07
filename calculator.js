var buttons = document.querySelectorAll('button')
var screenValue = '';
for(var i=0;i<buttons.length;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function () {
        var buttonText = this.innerText;
        var input = document.getElementById('cal-ans')
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            input.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            input.value = screenValue;
        } 
        else if (buttonText == "="){
            input.value = eval(screenValue)
        }
        else{
            screenValue += buttonText;
            input.value = screenValue;
        }
})


}

