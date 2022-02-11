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

//JUMBO
const ujumbo = document.getElementById("ujumbo").value
const cxjumbo = document.getElementById("cxjumbo").value
const jumbocxv = 25
const jumbocalc = (cxjumbo*jumbocxv)+parseInt(ujumbo)

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

function gerarpdf(){
const dados = document.getElementById("gerarpdf").innerHTML//conteudo do pdf
const janela = window.open("","","width= 400 height=400")//janela que abre 
janela.document.write("<html> <head>")
janela.document.write("<title> PDF COM JAVASCRIPT </title></head>")
janela.document.write("<body>")
janela.document.write(dados)
janela.document.write("</body> </html>")
janela.document.close
janela.print()//faz aparecer a janela na tela

}