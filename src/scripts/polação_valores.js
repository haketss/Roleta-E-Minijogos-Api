require('../database');

const { DadosjogosModel } = require('../models/dadosjogos-model');

const Dadosjogos = [
    {
        numero: 8,
        data: new Date(1998, 2, 14),
        quemganhou: 'casa'
      
    }
]

    ;

(async () => {
    for (let valore of Dadosjogos) {
        await DadosjogosModel.create({
            numero:     valore.numero,
            data:       valore.data,
            quemganhou: valore.quemganhou
        });
    }
    console.log('Tudo os Dadosjogos cadastrado!');
})();
