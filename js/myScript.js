// BOTÃO CALCULAR IMC
document.getElementById('enviar').addEventListener('click', function() {

    let peso = parseFloat(document.getElementById('txtPeso').value);
    let altura = parseFloat(document.getElementById('txtAltura').value);

    let imc = peso / (altura * altura);

    document.getElementById('resultado').innerText = imc.toFixed(2);

});


// BOTÃO CLASSIFICAR
document.getElementById('classificar').addEventListener('click', function() {

    let imc = parseFloat(document.getElementById('resultado').innerText);

    let classificacao;

    if (imc < 16.0) {
        classificacao = "Magreza grave";
    }
    else if (imc < 17.0) {
        classificacao = "Magreza moderada";
    }
    else if (imc < 18.5) {
        classificacao = "Magreza leve";
    }
    else if (imc < 25) {
        classificacao = "Peso Normal";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 35) {
        classificacao = "Obesidade grau I";
    }
    else if (imc < 40) {
        classificacao = "Obesidade grau II";
    }
    else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById('classificacao').innerText = classificacao;

});