const alfabeto = 26;
const codAsc = 65;

const cipher = {
    encode: function(criptOffset,msgCripto) {
        let resultCripto = "";
        for(let i=0; i < msgCripto.length; i++){
            let criptando = msgCripto.charCodeAt(i);
            let criptografar = ((criptando - codAsc + criptOffset) % alfabeto) + codAsc;
            if(criptando <= 64 || criptando >= 91){
                criptografar = criptando
            }  resultCripto += String.fromCharCode(criptografar)
    
            document.getElementById("resultCripto").innerHTML = resultCripto
            
        
          }
         
    },

    decode: function(msgDescripto,descriptOffset){
        let resultDescripto = "";
        for(let i=0; i < msgDescripto.length; i++){
            let desCriptando = msgDescripto.charCodeAt(i);
            let descriptografar = ((desCriptando + codAsc - descriptOffset) % alfabeto) + codAsc;
            if(desCriptando <= 64 || desCriptando >= 91){
                descriptografar = desCriptando
            }  resultDescripto += String.fromCharCode(descriptografar)
    
            document.getElementById("resultDescripto").innerHTML = resultDescripto
            
          }
          
    }


}

export default cipher;



