var multiplicar = "*";
var dividir = "/";
var somar = "+";
var subtrair = "-";

function calcular(){

    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";

    var select = document.getElementById("operador");
    var valor = select.options[select.selectedIndex].value;

    if(n1 != "" || n2 != ""){

        if(valor == multiplicar){
            var resultado1 = n1 + valor + n2 + ' = ' + n1*n2; 
            document.querySelector(".resultado1").innerHTML = resultado1;

        }else if(valor == dividir){
            var resultado1 = n1 + valor + n2 +' = ' + n1/n2; 
            document.querySelector(".resultado1").innerHTML = resultado1;

        }else if(valor == somar){
            var resultado2 = parseInt(n1) + parseInt(n2);
            document.querySelector(".resultado1").innerHTML = n1 + valor + n2 + ' = ' + resultado2;

        }else if(valor == subtrair){
            var resultado2 = parseInt(n1) - parseInt(n2);
            document.querySelector(".resultado1").innerHTML = n1 + valor + n2 + ' = ' + resultado2;
        }

    }else{
        alert("Preencha com dois valores!")
    }
}

function limpar(){
    document.querySelector(".resultado1").innerHTML = "";
}
