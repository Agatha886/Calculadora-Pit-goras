// Variável de validação dos Números 
let valid = 0;

// Botões
let botaoRes= document.querySelector('.res__btn');
let botaoLimp= document.querySelector('.limpar__btn');
let btnTeorema= document.querySelector('.btnTeorema');
let butnFecharTeorema= document.querySelector('.buttonTeroriaFechar');
let btnComo= document.querySelector('.btnComo');
let butnComoFechar= document.querySelector('.butnComoFechar');
let linkComo= document.querySelector('.linkComo');

// Adcinar evento para iniciar quando a janela carregar
window.addEventListener("load", function(){
    botaoRes.addEventListener("click",clicarRes);
    botaoRes.addEventListener("click",abreCalc);
    botaoLimp.addEventListener("click",clicarLimp);
    botaoLimp.addEventListener("click",abreImg);
    btnTeorema.addEventListener("click",clicarbtnTeorema);
    butnFecharTeorema.addEventListener("click",clicarbtnTeorema);
    btnComo.addEventListener("click",clicarbtnComo);
    butnComoFechar.addEventListener("click",clicarbtnComo);
    linkComo.addEventListener("click",clicarbtnTeorema);

})

function ValidErro(){
    let erroNumAberto= document.querySelector('.erroNumAberto');
    let erroNumFechado= document.querySelector('.erroNumFechado');

    if(erroNumAberto.classList.toggle('erroNumFechado')){
        erroNumAberto.classList.toggle('erroNumFechado');
    }
}

// Função calculo do botão Resultado
function clicarRes() {
    // Variáveis 
    let num1 = document.getElementById("catetoB").value;
    let num2 = document.getElementById("catetoC").value;
    let caputurandoB = "";
    let caputurandoC = "";
    let elevadoB = "";
    let elevadoC = "";
    let somaCatetos = "";
    valid = valid+1;

    // Validação dos números
    if((num1 == "" ) && (num2== "")){
        ValidErro();
    }else{
        if(valid>1){
            abreImg();
        }
    }
        
        // Cálculo da Hipotenusa
        let res =(num1**2 + num2**2) ** (1/2);
        document.querySelector(".resultado").innerHTML = res;
        document.getElementById("Res").innerHTML = res;


        //Capturando o valor de B
        document.querySelector(".resultado").innerHTML = res;
        caputurandoB = document.getElementById("catetoB").value;
        if(caputurandoB = " "){
            caputurandoB = 0.0;
        };
        document.getElementById("B").innerHTML = caputurandoB;

        //Capturando o valor de C
        caputurandoC = document.getElementById("catetoC").value;
        if(caputurandoC = " "){
            caputurandoC = 0.0;
        };
        document.getElementById("C").innerHTML = caputurandoC;

        // Elevando C E B
        elevadoB = num1**2;
        document.querySelector(".ElevadoB").innerHTML = elevadoB.toFixed(2);

        elevadoC= num2**2;
        document.querySelector(".ElevadoC").innerHTML = elevadoC.toFixed(2);

        // Somando Catetos
        somaCatetos = elevadoB + elevadoC;
        document.querySelector(".SomaCatetos").innerHTML = somaCatetos.toFixed(2);
        document.getElementById("SomaCatetos").innerHTML = somaCatetos.toFixed(2);
}

// Função do botão Limpar
function clicarLimp() {
    let num1 = document.getElementById("catetoB");
    let num2 = document.getElementById("catetoC");
    let res = document.querySelector(".resultado").innerHTML = resultado;

    num1.value = "";
    num2.value = "";
    res.value = "";

}

// Função abrir Texto " O TEOREMA DE PITÁGORAS "
function clicarbtnTeorema(){
    let pag__teorema = document.querySelector('.pag__teorema');
    let tituloTeorema = document.querySelector('.tituloTeorema');
    let buttonTeroriaFechar = document.querySelector('.buttonTeroriaFechar');
    let menuPrincipal = document.querySelector('.menu-principal');
    
    menuPrincipal.classList.toggle('menu-principalFechado');
    pag__teorema.classList.toggle('pag__teoremaFechado');
    tituloTeorema.classList.toggle('tituloTeoremaFechado');
    buttonTeroriaFechar.classList.toggle('buttonTeoriaFecharFechado');

}

// Função abrir Texto " Como funciona a Calculadora? "
function clicarbtnComo(){
    let pag__como = document.querySelector('.pag__como');
    let tituloComo = document.querySelector('.tituloComo');
    let butnComoFechar = document.querySelector('.butnComoFechar');

    pag__como.classList.toggle('pag__comoFechado');
    tituloComo.classList.toggle('tituloComoFechado');
    butnComoFechar.classList.toggle('butnComoFecharFechado');

}

// Função Abrir Resultado e o Cálculo 
function abreCalc(evento){
    let imgAberto= document.querySelector('.imgAberto');
    let calculo = document.querySelector('.calculo');
    let calcEscrito = document.querySelector('.calcEscrito');
    let tituloresultado = document.querySelector('.tituloresultado');
    let resultado = document.querySelector('.resultado');

    if(imgAberto.classList.toggle('imgFechado')){
        imgAberto.classList.toggle('imgFechado');
    }if(calculo.classList.toggle('calcFechado')){
        calculo.classList.toggle('calcFechado');
    }if(calcEscrito.classList.toggle('calcFechado')){
        calcEscrito.classList.toggle('calcFechado');
    }if(tituloresultado.classList.toggle('tituloresultadoFechado')){
        tituloresultado.classList.toggle('tituloresultadoFechado');
    }if(resultado.classList.toggle('resultadoFechado')){
        resultado.classList.toggle('resultadoFechado');
    }
}

// Função Abrir imagem
function abreImg(evento){
    let imgAberto= document.querySelector('.imgAberto');
    let calculo = document.querySelector('.calculo');
    let calcEscrito = document.querySelector('.calcEscrito');
    let tituloresultado = document.querySelector('.tituloresultado');
    let resultado = document.querySelector('.resultado');
    let erroNumAberto= document.querySelector('.erroNumAberto');

    if(imgAberto.classList.toggle('imgFechado')){
        calculo.classList.toggle('calcFechado');
        calcEscrito.classList.toggle('calcFechado');
        tituloresultado.classList.toggle('tituloresultadoFechado');
        resultado.classList.toggle('resultadoFechado');
        if(erroNumAberto.classList.toggle('erroNumFechado')){
        }else{
            erroNumAberto.classList.toggle('erroNumFechado')
        }
    }else{
        imgAberto.classList.toggle('imgFechado')
    }
}

