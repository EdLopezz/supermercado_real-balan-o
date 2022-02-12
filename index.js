function impressao(){

const bprata = document.getElementById("bprata").value
const bdagua = document.getElementById("bdagua").value
const bterra = document.getElementById("bterra").value
const imprimir = document.getElementById('imprimir')

//OVOS
//Omega
const uomega = document.getElementById("uomega").value
const cxomega = document.getElementById("cxomega").value
const omegacxv = 25
const omgcalc = (cxomega*omegacxv)+parseInt(uomega)
console.log(omgcalc)
//JUMBO
const ujumbo = document.getElementById("ujumbo").value
const cxjumbo = document.getElementById("cxjumbo").value
const jumbocxv = 25
const jumbocalc = (cxjumbo*jumbocxv)+parseInt(ujumbo)
console.log(jumbocalc)

//STA M C12
const ustam = document.getElementById("ustam").value
const cxstam = document.getElementById("cxstam").value
const stamcxv = 20
const stamcalc = (cxstam*stamcxv)+parseInt(ustam)

//STA M C20
const ustamv = document.getElementById("ustamvinte").value
const cxstamv = document.getElementById("cxstamv").value
const stamvcxv = 12
const stamvicalc = (cxstamv*stamvcxv)+parseInt(ustamv)

//VENEZA
const uveneza = document.getElementById("uveneza").value
const cxveneza = document.getElementById("cxveneza").value
const venezacxv = 10
const venzcalc = (cxveneza*venezacxv)+parseInt(uveneza)

//CODORNA
const ucodorna = document.getElementById("ucodorna").value
const cxcodorna = document.getElementById("cxcodorna").value
const codornacxv = 25
const cordcalc = (cxcodorna*codornacxv)+parseInt(ucodorna)

//B JESUS
const ubjesus = document.getElementById("ubjesus").value
const cxbjesus = document.getElementById("cxbjesus").value
const bjesuscxv = 20
const bjesuscalc = (cxbjesus*bjesuscxv)+parseInt(ubjesus)

//Resultado Banana

const resprata = document.getElementById("rprata")
const resdagua = document.getElementById("rdagua")
const resterra = document.getElementById("rterra")

resprata.innerHTML=bprata
resdagua.innerHTML=bdagua
resterra.innerHTML=bterra

// Resultado ovos
const resomega = document.getElementById("resomega")
const resjumbo = document.getElementById("resjumbo")
const resstam = document.getElementById("resstam")
const resstamv = document.getElementById("resstamv")
const resveneza = document.getElementById("resveneza")
const rescodorna = document.getElementById("rescodorna")
const resbjesus = document.getElementById("resbjesus")

console.log(omgcalc)
resomega.innerHTML = omgcalc
resjumbo.innerHTML = jumbocalc
resstam.innerHTML=stamcalc
resstamv.innerHTML=stamvicalc
resveneza.innerHTML = venzcalc
rescodorna.innerHTML =cordcalc
resbjesus.innerHTML=bjesuscalc



}

//Gerador de PDF

function createPDF() {
    var pdf = document.getElementById("content");
    var opt = {
        margin: 1,
        filename: 'html2pdf-converted.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}

//tecla enter 

$(document).ready(function(){
    /* ao pressionar uma tecla em um campo que seja de class="inputUnico", 
    em vez de submeter o formulário, vai pular para o próximo campo.
    o formulário só vai executar o submit com a tecla enter se estiver no ultimo campo do formulário*/
    $('.inputUnico').keypress(function(e){
        /* 
         * verifica se o evento é Keycode (para IE e outros browsers)
         * se não for pega o evento Which (Firefox)
        */
       var tecla = (e.keyCode?e.keyCode:e.which);
        
       /* verifica se a tecla pressionada é a tecla ENTER */
       if(tecla == 13){
           /* guarda o seletor do campo onde foi pressionado Enter */
           campo =  $('.inputUnico');
           /* pega o indice do elemento*/
           indice = campo.index(this);
           /*soma mais um ao indice e verifica se não é null
            *se não for é porque existe outro elemento
           */
          if(campo[indice+1] != null){
             /* adiciona mais 1 no valor do indice */
             proximo = campo[indice + 1];
             /* passa o foco para o proximo elemento */
             proximo.focus();
          }else{
            return true;
          }
       }
       if(tecla == 13){
        /* impede o submit caso esteja dentro de um form */
        e.preventDefault(e);
        return false;
        }else{
        /* se não for tecla enter deixa escrever */
        return true;
        }
    })
 })