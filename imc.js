
const calcular = document.querySelector("#calcular");

const imc = () => {
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const resultado = document.querySelector("#resultado");
    
    if (nome !== '' && altura !== '' && peso != '') {
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorImc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (valorImc >= 18.5 && valorImc < 25) {
            classificacao = "Peso normal"
        } else if (valorImc >= 25 && valorImc < 30) {
            classificacao = "Sobrepeso"
        } else if (valorImc >= 30 && valorImc < 35) {
            classificacao = "Obesidade grau 1"
        } else if (valorImc >= 35 && valorImc < 40) {
            classificacao = "Obesidade grau 2"
        } else if (valorImc >= 40) {
            classificacao = "Obesidade grau 3"
        };

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    } else {
        alert("preencha os campos");
    };
};

calcular.addEventListener('click', imc);