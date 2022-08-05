 /* Adultos (por pessoa):
Quantidade de carne para homens: 400 gramas + 6 horas = 650 gramas
Quantidade de carne para mulheres: 300 gramas + 6 horas 550 gramas 
Acompanhamentos: 200 gramas 
Quantidade de bebida não alcoólica (refrigerante, suco e água): 1,5 litro + 6 horas = 2 litos
Quantidade de cerveja: 1200ml + 6 horas = 1500ml

Crianças de até 11 anos (por pessoa):
Quantidade de carne: 200 gramas
Quantidade de bebida não alcoólica (refrigerante, suco e água): 750 ml

Carvão: 5 quilos para 6 quilos de carne */


var calculo = document.getElementById("calc")


calculo.addEventListener("click", pegar_dados)

function pegar_dados()
{

    let homens =  parseInt(document.getElementById("homem").value)

    let mulheres = parseInt(document.getElementById("mulher").value)

    let criancas = parseInt(document.getElementById("crianca").value)

    let horas = parseInt(document.getElementById("horario").value)

    // let dados = [homens, mulheres, criancas, horas]

    calcular_dados(homens, mulheres, criancas, horas)

}



function calcular_dados(homens, mulheres, criancas, horas)
{
    let dados = document.getElementById("modificacao")
    

    console.log(homens)

    if(isNaN(homens) || isNaN(mulheres) || isNaN(criancas)|| isNaN(horas))
    {
        dados.style.display = "block"
         
        dados.innerHTML = `<br> <p>É necessário preencher todos os campos indicados. Caso não possua algum valor, preencha o campo com o número 0.</p>`

    }

    else{

        if(horas < 6){

            var valor_carne = (homens * 400) + (mulheres * 300) + (criancas * 200) 

            var valor_bebida_alc = (homens + mulheres) *  1200

            var valor_bebida = ((homens + mulheres) * 1500) + (criancas * 750)

            var valor_acompanhamento = (homens + mulheres + criancas) * 200

            var carvao = valor_carne / 1200

        }
        else
        {

            var valor_carne = (homens * 650) + (mulheres * 550) + (criancas * 325) 

            var valor_bebida_alc = (homens + mulheres) *  1500

            var valor_bebida = ((homens + mulheres) * 2000) + (criancas * 1000)

            var valor_acompanhamento = (homens + mulheres + criancas) * 200

            var carvao =  valor_carne / 1200

        }

      

        dados.style.display = "block"
        dados.innerHTML = `<br> <p>  ${valor_carne}g de carne</p>`
        dados.innerHTML += `<p>  ${valor_bebida_alc}ml de cerveja</p>`
        dados.innerHTML += `<p>  ${valor_bebida}ml de bebida não alcoólica</p>`
        dados.innerHTML += `<p>  ${valor_acompanhamento}g de acompanhamentos</p>`
        dados.innerHTML += `<p>  ${carvao.toFixed(2)}kg de carvão</p>`

    }

}