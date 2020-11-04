const alfabeto = 26;
const codAsc = 65;

const cipher = {
    encode: function(criptOffset,msgCripto) {
        let resultCripto = "";
        for(let i=0; i < msgCripto.length; i++){
        
            const criptografar = ((msgCripto.charCodeAt(i) - codAsc + criptOffset) % alfabeto) + codAsc;
        
            resultCripto += String.fromCharCode(criptografar)
            //resultCripto = console.log(resultCripto);
    
            document.getElementById("resultCripto").innerHTML = resultCripto
            //return resultCripto
        
          }
    },

    decode: function(msgDescripto,descriptOffset){
        let resultDescripto = "";
        for(let i=0; i < msgDescripto.length; i++){
        
            const descriptografar = ((msgDescripto.charCodeAt(i) + 65 - descriptOffset) % 26) + 65;
        
            resultDescripto += String.fromCharCode(descriptografar)
            //console.log(resultDescripto);
    
            document.getElementById("resultDescripto").innerHTML = resultDescripto
            
          }
          
    }

}

export default cipher;



