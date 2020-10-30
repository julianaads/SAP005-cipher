import cipher from './cipher.js';

     
  

     
//Códigos relacionados ao formulário Criptografar
      

//primeiro botão
const startCripto = document.getElementById("startCripto").addEventListener("click",criptografarMsg);
const caixaAlta = document.getElementById("criptografar").addEventListener("change",criptoMaiuscula);


   //função para deixar letra maiúscula Criptografar

   function criptoMaiuscula(){
        console.log("Estou funcionando?");
        const converTexto = document.getElementById("criptografar").value;
        document.getElementById("criptografar").value = converTexto.toUpperCase();
   
  }



// função para o primeiro botão
function criptografarMsg() {
    const msgCripto = document.getElementById("criptografar").value;
    const criptOffset = (document.getElementById("criptOffset")).value;
    const resultCripto = document.getElementById("resultCripto");
    
    if (msgCripto == "" && criptOffset == "") {

        resultCripto.textContent = "Preencha todos os Campos"
    }


}

//códigos relacionados ao formulário Descriptografar 
//segundo botão
const startDescripto = document.getElementById("startDescripto").addEventListener("click",descriptografarMsg);
const maiuscula = document.getElementById("descriptografar").addEventListener("change",descriptoMaiuscula);


//função para deixar letras maiusculas
function descriptoMaiuscula() {
    console.log("Está ai?");
    const textoConverte = document.getElementById("descriptografar").value;
    document.getElementById("descriptografar").value = textoConverte.toUpperCase();

}



//função segundo botão
function descriptografarMsg() {
    const msgDescripto = document.getElementById("descriptografar").value;
    const descriptOffset = (document.getElementById("descriptOffset")).value;
    const resultDescripto = document.getElementById("resultDescripto");

    if (msgDescripto == "" && descriptOffset == "") {
        
        resultDescripto.textContent = "Preencha todos os Campos"

    }
       

}




console.log(cipher); 


