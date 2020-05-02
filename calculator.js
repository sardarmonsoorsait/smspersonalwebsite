var a
var f
var s
var z
function display(num){
    document.getElementById("inp").value =  document.getElementById("inp").value + num
}
    function oparation( str){

 a = document.getElementById("inp").value
 f= str
document.getElementById('inp').value=""
}
function mult(){

}
function displayans(){
    s= document.getElementById('inp').value
    switch(f)
    {
    case '/':
        z=a/s
        break
        case '*':
        z=a*s
        break
        case '-':
        z=a-s
        break
        case '+':
            var text =a+'+'+s
            z=eval(text)
            break

    }

   
    document.getElementById('inp').value=z

    
    
}
function clsdisplay(){
    document.getElementById('inp').value=''
}
function addisplay(){
    document.getElementById('inp').value=' Made by Abubakker '
    document.getElementById('inp').fontsize='small'
}