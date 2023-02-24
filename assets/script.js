
/*
Case Sensitive= Reconhece letras Maiusculas e Minusculas
por tag: getElementsByTagName()
por Id: getElementsById()
por nome: getElementsByName()
por classe: getElementsByClasseName()
por seletor: querySelector()
*/
let nome = window.document.getElementById("nome")
let email = window.document.querySelector("input#Email:")
let assunto = window.document.querySelector("input#Assunto:")

nome.style.width = "100%";
email.tyle.width = "100%";
assunto.tyle.width = "100%";

function validaNome(){
    let txt = document.querySelector("#txtNome")
if (nome.value.length < 3){
    txt.innerHTML = "Nome Inválido"
    txt.style.color = "red"
    
} 
else{
    txt.innerHTML = "Nome Válido"
    txt.style.color = "Green"
}
}




