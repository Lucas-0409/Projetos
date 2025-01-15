function adiciona(valor){
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado + valor;
};

function adicionaZero(){
    let resultado = document.getElementById("resultado").innerHTML;
    if (resultado == ""){
        document.getElementById("resultado").innerHTML = "";
    } else {
        document.getElementById("resultado").innerHTML = resultado + 0;
    }
};

function apagar(){
    document.getElementById("resultado").innerHTML = "";
};

function igual(){
    let resultado = document.getElementById("resultado").innerHTML;
    if (resultado !== ""){
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerHTML = "insira um valor";
        setTimeout(function(){
            document.getElementById("resultado").innerHTML = "";
        }, 1500)
    }
};