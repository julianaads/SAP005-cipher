import cipher from './cipher.js'

//Códigos relacionados ao formulário Criptografar
      

//botão criptografar
const startCripto = document.getElementById("startCripto").addEventListener("click",criptografarMsg);
//tranformar o conteudo do criptografar em letras maiusculas
const caixaAlta = document.getElementById("criptografar").addEventListener("change",criptoMaiuscula);



//função para deixar letra maiúscula Criptografar
   function criptoMaiuscula(){
        //console.log("Estou funcionando?"); teste para saber se estava funcionando
        const converTexto = document.getElementById("criptografar").value;
        document.getElementById("criptografar").value = converTexto.toUpperCase();
  }

  //variaveis dos formulários
  
  

// função para o primeiro botão
function criptografarMsg(event) {
    //preventDefault serve para minha pag não atualizar quando clico no botão
    event.preventDefault();
    const alfabeto = 26;
    const codAsc = 65;
    const msgCripto = document.getElementById("criptografar").value;
    const criptOffset = parseInt(document.getElementById("criptOffset").value);
    let resultCripto = "";

    for(let i=0; i < msgCripto.length; i++){
        
        const criptografar = ((msgCripto.charCodeAt(i) - codAsc + criptOffset) % alfabeto) + codAsc;
    
        resultCripto += String.fromCharCode(criptografar)
        //resultCripto = console.log(resultCripto);

        document.getElementById("resultCripto").innerHTML = resultCripto
        //return resultCripto
    
      }
    
      
}






//códigos relacionados ao formulário Descriptografar 
//segundo botão
const startDescripto = document.getElementById("startDescripto").addEventListener("click",descriptografarMsg);
const maiuscula = document.getElementById("descriptografar").addEventListener("change",descriptoMaiuscula);

//função para deixar letras maiusculas
function descriptoMaiuscula() {
    const textoConverte = document.getElementById("descriptografar").value;
    document.getElementById("descriptografar").value = textoConverte.toUpperCase();

}


//função segundo botão
function descriptografarMsg(event) {
    const msgDescripto = document.getElementById("descriptografar").value;
    const descriptOffset = (document.getElementById("descriptOffset")).value;
    const resultDescripto = document.getElementById("resultDescripto");
       
    //preventDefault serve para minha pag não atualizar quando eu clico no botão
    event.preventDefault();
    
    if (msgDescripto == "" && descriptOffset == "") {
        
        resultDescripto.textContent = "Preencha todos os Campos"
    }else{
        resultDescripto.textContent = msgDescripto
    }
       

}




console.log(cipher);




