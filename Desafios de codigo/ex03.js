const { gets, print } = require('./funcoes-auxiliares');

let bruto = gets();
let beneficio = gets();

function CalcularSalario(bruto, beneficio){

    let salario = bruto - imposto + beneficio;

    return salario;
}

function CalcularImposto(bruto){

    let imposto = 0;

    if(bruto > 0.00 && bruto <= 1100.00){
        imposto = bruto * 0.5;
    }else if(bruto > 1100.01 && bruto <= 2500.00){
        imposto = bruto * 0.1;
    }else if(bruto > 2500){
        imposto = bruto * 0.15;
    }

    return imposto;
}

let imposto = CalcularImposto(bruto);
let salario = CalcularSalario(bruto, beneficio);
print(salario);