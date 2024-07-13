const {gets, print} = require('./funcoes-auxiliares');

const media = gets();

function CacularMedia(media){
    
    if(media >= 7){
        print('Aprovado');
    }else if(media < 7 && media >= 5){
        print('Recuperacao');
    }else{
        print('Reprovado');
    }
}

CacularMedia(media);