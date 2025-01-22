let btn= document.getElementById('btn')

var formulario= document.Formulário

var resul = document.getElementById('resposta')

var NumeroMinimo = 10;
var input= document.getElementById('email')
var SenhaInput = document.getElementById('senha')
var TextoSenha = document.getElementById('RespostaSenha')



function minimo(){
    
    var input = document.getElementById("email"); 
    
   

     if (input.value.length <= NumeroMinimo) {
         resul.innerHTML = "O texto deve ter pelo menos " + NumeroMinimo + " caracteres."; resul.style.color = "red"; } 
        
     else { 
            resul.innerHTML = "Texto válido!"; resul.style.color = "green";
            
         }
   
}



function validate(){
    if (formulario.nome.value == "") {
        nome.style.backgroundColor = 'red';
        nome.focus()
        nome.style.color= 'black'
        alert('PREENCHA SEU NOME')
}
    if(formulario.email.value==""){
    email.style.backgroundColor = 'red';
    email.focus()
    email.style.color = 'black'
    alert('PREENCHA SEU E-MAIL')

       


}
    if(formulario.senha.value==""){
        senha.style.backgroundColor = 'red';
        senha.focus()
        senha.style.color = 'black'
        alert('DIGITE SUA SENHA')
    }

    else{
        alert("DADOS ENVIADOS COM SUCESSO")
        senha.style.backgroundColor = 'white';
        email.style.backgroundColor = 'white';
        nome.style.backgroundColor = 'white';
        formulario.reset();
        TextoSenha.innerHTML="";
        resul.innerHTML = ""
       

        

    }



}


function ValidarSenha(){
  

    if(SenhaInput.value.length<=8){
        TextoSenha.innerHTML="O mínimo de caracteres permitido é 8"
        TextoSenha.style.color= "red"
} 
    
    else {
        TextoSenha.innerHTML = "Senha válida",
            TextoSenha.style.color = "green"
            
        }
}
   












