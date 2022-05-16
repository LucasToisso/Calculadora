function calculo(x){
    //let num = document.getElementById('resposta').innerHTML;
    //document.getElementById('resposta').innerHTML = num + x;

    document.getElementById('resposta').innerHTML += x;
}

function calcular(){
    //let resultado = document.getElementById('resposta').innerHTML;
    //document.getElementById('resposta').innerHTML = eval(resultado);

    document.getElementById('resposta').innerHTML = eval(document.getElementById('resposta').innerHTML);
}

function limpar(){
    document.getElementById('resposta').innerHTML = '';
}

function apagar(){
    let resultado = document.getElementById('resposta').innerHTML;
    document.getElementById('resposta').innerHTML = resultado.substring(0, resultado.length -1);
}