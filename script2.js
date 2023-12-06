function equation(val){
    document.getElementById("txt1").value += val;

}

function calculation(){
    var a=document.getElementById("txt1").value;
    var c=eval(a)
    document.getElementById("txt1").value = c
}

function del(){
    document.getElementById("txt1").value = " ";
}