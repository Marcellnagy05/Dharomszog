function Megszerkesztheto(){
var a = document.getElementById("egyikBefogo").value
var b = document.getElementById("masikBefogo").value
var c = document.getElementById("atfogo").value
if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
    alert("A háromszög megszerkeszthető!!")
}
else{
    alert("A háromszög nem szerkeszthető meg!")
}
}

function randomSzamok(){
    document.getElementById("egyikBefogo").value = Math.round(Math.random(100)*100,2) 
    document.getElementById("masikBefogo").value = Math.round(Math.random(100)*100,2) 
    document.getElementById("atfogo").value  = Math.round(Math.random(100)*100,2) 
}

function atfogoKiszamitasa(){
    var a = document.getElementById("egyikBefogo").value
    var b = document.getElementById("masikBefogo").value
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) 
}
//a + b > c && a + c > b && b + c > a