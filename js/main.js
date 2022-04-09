function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//    console.log(document.getElementById("agradecimento"));
//    alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://g1.globo.com/ba/bahia/"); // abre o link em uma nova pagina
//    window.location.href = "https://g1.globo.com/ba/bahia/"; // abre o link na mesma pagina
}

function trocar(elemento){
//    alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
//    document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
//    document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade));
*/


/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, palavra, nova_palavra){
    return frase.replace(palavra, nova_palavra)
}
alert(setReplace("Oi,eu sou Jorge", "Jorge", "Atlas"));
*/

/*
var date = new Date(); // cria uma variavel para mostrar a data
alert(date.getMonth() + 1); // mostra o numero do mês atual (o +1 é porque começa a contar do 0)
alert(date.getDay()); // mostra o numero do dia da semana atual
alert(date.getHours()); // mostra a hora atual(apenas a hora)
alert(date.getMinutes()); // mostra os minutos atuais(apenas os minutos)
*/

/*
var count;
for(count = 1; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count < 5){
    alert(count + 1);
    count = count + 1;
}
*/

/*
var idade = prompt("Qual a sua idade?: ");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/




/*
var frutas = [{nome:"uva", cor:"roxa"}, {nome:"jaca", cor:"verde"}, {nome:"kiwi", cor:"marrom"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"uva", cor:"roxa"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Uva", "Jaca", "Kiwi"];
//lista.push("Manga"); // Coloca um item a mais na lista
//lista.pop(); // Tira o ultimo elemento da lista
//console.log(lista.reverse()); // Inverte a ordem dos objetos do Ultimo ao Primeiro
//console.log(lista.length); // mostra o numero de elementos na lista
//console.log(lista);  // exibe os elementos entre ()
//console.log(lista.toString()); // Transforma a lista em string
//console.log(lista.join(" 0 ")); // exibe a lista inserindo entre os elementos o que estiver em ()
//alert(lista) // Exibe os elementos entre () na tela