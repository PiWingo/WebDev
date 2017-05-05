/**
 * Created by unifprigetto on 31/03/2017.
 */

var R = parseInt(Math.random()*100);

function adivinha(){
    var N = document.getElementById("campo");
    var h3 = document.getElementById("resposta");
    var num = parseInt(N.value);

    if (num == R){
        h3.innerHTML = "Acertou!"
    }
    else if (num > R){
        h3.innerHTML = "Numero Maior"
    }
    else if (num < R){
        h3.innerHTML = "Numero Menor"
    }
}
