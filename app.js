var KeyBoard = document.calculator;
var StartPoint = 0;
var NewNum = false;
var PendingOp = "";
function NumPressed (num) {
    if (NewNum) {
        KeyBoard.txt1.value  = num;
        NewNum = false;
    }
    else {
        if (KeyBoard.txt1.value == "0")
        KeyBoard.txt1.value = num;
        else
        KeyBoard.txt1.value += num;
    }
}
function Operation (Op) {
    var txt1 = KeyBoard.txt1.value 
    if (NewNum && PendingOp != "=");
    else
    {
        NewNum = true;
        switch(PendingOp)
        {
            case '+':StartPoint += parseFloat(txt1);
            break;
            case '-':StartPoint -= parseFloat(txt1);
            break;
            case '/':StartPoint /= parseFloat(txt1);
            break;
            case '*':StartPoint *= parseFloat(txt1);
            break;
            default: StartPoint = parseFloat(txt1);
            
        }
        KeyBoard.txt1 .value = StartPoint;
        PendingOp = Op
        if( KeyBoard.txt1 .value == "Infinity"){
            KeyBoard.txt1 .value ="NaN";
        }
    }
    
}
function Decimal () {
    var curtxt1  = KeyBoard.txt1 .value;
    if (NewNum) {
        curtxt1 = "0.";
        NewNum = false;
    }
    else
    {
        if (curtxt1 .indexOf(".") == -1)
            curtxt1  += ".";
    }
    KeyBoard.txt1 .value = curtxt1 ;
}
function ClearEntry () { //clear works for 0
    KeyBoard.txt1 .value = "0";
    NewNum = true;
} 

function Clear () { //clear works for other perations
    StartPoint = 0;
    PendingOp = "";
    ClearEntry();
}

function BackSpace () { //backespaces the number
    var output= KeyBoard.txt1 .value;
    KeyBoard.txt1 .value= output.substr(0,output.length-1);
   // NewNum = true;
} 

function Neg () {
    KeyBoard.txt1 .value = parseFloat(KeyBoard.txt1 .value)* -1 ;
}
