const { gets, print } = require('./funcoes-auxiliares');

let maiorpar = null;
let menorimpar = null;

const n = gets();

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === null || numero > maiorpar) {
        maiorpar = numero;
    }
    else {
        if (menorimpar === null || numero < menorimpar) {
            menorimpar = numero;

        }
    }
}

print("Maior valor par: " + maiorpar);
print("Menor valor: " + menorimpar);

