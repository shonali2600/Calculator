function getHistory(){
    return document.querySelector(".history").innerText;
}
function printHistory(num){
    document.querySelector(".history").innerText = num;
}
// printHistory("2*50");

function getOutput(){
    return document.querySelector(".output").innerText;
}
function printOutput(num){
    document.querySelector(".output").innerText = num;
}
// printOutput(0);

var isNew = false;
var num = document.getElementsByClassName("number");
for(var i=0;i<num.length;i++){
    num[i].addEventListener('click', function(){
        if(isNew){
            output = this.id;
            printOutput(output);
            isNew = false;
        }
        else{
            var output = getOutput();
            output = output + this.id;
            printOutput(output);
        }
    });
}
var btn = document.getElementsByClassName("operator");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click', function(){
        if(this.id === "clear"){
             printOutput("");
             printHistory("");
        }
        else if(this.id === "backspace"){
            var output = getOutput();
            output = output.substr(0, output.length-1);
            printOutput(output);
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output){
                if(this.id === "equals"){
                    history += output;
                    output = eval(history);
                    printOutput(output);
                    printHistory(history);
                    isNew = true;
                }
                else{
                    history = output + this.id;
                    output = "";
                    printHistory(history);
                    printOutput(" ");
                }
            }
        }
    });
}
