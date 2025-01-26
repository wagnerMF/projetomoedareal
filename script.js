
//criação das variaveis
let dolar = 5.1
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")




// pega os valores de entrada
usdInput.addEventListener("keyup", () =>{
    //usdInput.value = formatCurrency(usdInput.value)
    convert("usd-to-brl")

})

brlInput.addEventListener("keyup", () =>{
   // brlInput.value = formatCurrency(brlInput.value)
    convert("brl-to-usd")
})



// quando sair do campo ele formata o valor 
usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value)
})

// quando sair do campo ele formata o valor 
brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)    
})



//iniciar o sistema com esse valor abaixo
usdInput.value = "1000,00"
convert("usd-to-brl")



// funcoes
function formatCurrency(value){
    
    // ajustar o valor
    let fixedValue = fixValue(value)

    // utilizar funcção de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits:2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
       

}

// ajusatando a virgula pelo ponto, e ajusta o valor formatado e verificar o valor digitado
function fixValue(value){
    let fixedValue = value.replace("," ,".")
    let floatValue = parseFloat(fixedValue)
    
    if (floatValue == NaN){
        floatValue = 0
    }
    return floatValue

}


//coverter os valores
function convert(type){

    // convertendo o resultado dolar para real
    if (type == "usd-to-brl"){
        
        //ajustar o valor
        let fixedValue = fixValue(usdInput.value)

        //converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)

        //mostrar o valor no campo real
        brlInput.value = formatCurrency(result)
        
    }


    if (type == "brl-to-usd"){
        //ajustar o valor
        let fixedValue = fixValue(brlInput.value)

        //converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)

        //mostrar o valor no campo dolar
        usdInput.value = formatCurrency(result)
    }
}






//let usdInput = document.querySelector("#usd")
//let brlInput = document.querySelector("#brl")



//pegando o valor da ação conforme o usuario digita
/*usdInput.addEventListener("keyup", () => {
    console.log(usdInput.value)
})
*/

//pegando o valor da ação conforme o usuario tecla
/*usdInput.addEventListener("keyup", () => {
    console.log("apertou o campo USD")
})
*/

//pegando o valor da ação conforme o usuario tecla informa o texto "apertou o campo BRL"
/*brlInput.addEventListener("keyup", () => {
    console.log("apertou o campo BRL")
})
*/



/*
function avisar(){
    alert ("opa executei a função...")
}


let botao = document.querySelector("#avisar")

//evento click ao passar o mouse no botao
/*
botao.addEventListener("mouseover", () => {
    avisar()
})
*/


/* evento click ao clicar no botao
botao.addEventListener("click", () => {
    avisar()
})
*/


//alert ("Opa, aqui está um aviso!")

//tipo de variaveis   != diefrente, == igual

/*let idade = 11 //tipo number
let nome = 'wagner'
let dinheiroA = 100, dinheirob=10,total
*/

/*if (idade == 18){
    console.log('voce é maior de idade')
}
else
console.log('idade diferente de 18')
*/

/*
let lista = ['farinha','agua','sal','console']

for (let item of lista){
    console.log('- ingrediente: '+item)
}
*/

/*
let fruta = ["maçã ","laranja"," e uva"]


let personagens = {

    nome: "fulano",
    novel: 10,
    forca: 800,
    magia: 200,
    vida: 1000
}

function somar (a, b){
    let resultado = a + b
    return resultado
}


let somar2 = (a,b) =>{
    let resultado = a+b
    return resultado
}


let x = somar(35, 5)
let y = somar2(3, 5)


console.log(x)
console.log(y)
*/

//total = dinheiroA-dinheirob
//console.log('minha idade é: ' + idade+', Frutas que gosto são: '+fruta +'. Dinheiro sobrando no bolso é: R$ '+total + ' reais.')


