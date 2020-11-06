import cipher from './cipher.js'

//Códigos relacionados ao formulário Criptografar
     
//botão criptografar
document.getElementById("startCripto").addEventListener("click",criptografarMsg);
//tranformar o conteudo do criptografar em letras maiusculas
document.getElementById("criptografar").addEventListener("change",criptoMaiuscula);

//função para deixar letra maiúscula Criptografar
   function criptoMaiuscula(){
        //console.log("Estou funcionando?"); teste para saber se estava funcionando
        const converTexto = document.getElementById("criptografar").value;
        document.getElementById("criptografar").value = converTexto.toUpperCase();
  }

// função para o primeiro botão
function criptografarMsg(event) {
    //preventDefault serve para minha pag não atualizar quando clico no botão
    event.preventDefault();
    const msgCripto = document.getElementById("criptografar").value
    const criptOffset = parseInt(document.getElementById("criptOffset").value);
    
    cipher.encode(criptOffset,msgCripto)   
}


//códigos relacionados ao formulário Descriptografar 
//segundo botão
document.getElementById("startDescripto").addEventListener("click",descriptografarMsg);
document.getElementById("descriptografar").addEventListener("change",descriptoMaiuscula);

//função para deixar letras maiusculas
function descriptoMaiuscula() {
    const textoConverte = document.getElementById("descriptografar").value;
    document.getElementById("descriptografar").value = textoConverte.toUpperCase();
}

//função segundo botão
function descriptografarMsg(event) {
    const msgDescripto = document.getElementById("descriptografar").value;
    const descriptOffset = (document.getElementById("descriptOffset")).value;
    
    cipher.decode(msgDescripto,descriptOffset)
    //preventDefault serve para minha pag não atualizar quando eu clico no botão
    event.preventDefault();
}

document.getElementById("limparCripto").addEventListener("click",apagar);

function apagar(event){
    event.preventDefault();
    document.getElementById("criptografar").value="";
    document.getElementById("criptOffset").value="";
    document.getElementById("resultCripto").innerHTML="";
    //console.log("apaguei");
}

document.getElementById("limparDescripto").addEventListener("click",apagarDes);

function apagarDes(event){
    event.preventDefault();
    document.getElementById("descriptografar").value="";
    document.getElementById("descriptOffset").value="";
    document.getElementById("resultDescripto").innerHTML="";
    //console.log("funcionei");
}


//console.log(cipher);




