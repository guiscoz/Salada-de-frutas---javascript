let frutasTotal = [], frutasIndividuais = [], frutasQuantidade = [], frutaAdicionada = ''

while (frutaAdicionada != 'cereja'){
    frutaAdicionada = prompt('Qual fruta adicionar?').toLowerCase()

    if(!frutasTotal.includes(frutaAdicionada)){
        frutasIndividuais.push(frutaAdicionada)
        frutasQuantidade.push(0)
    }
    frutasTotal.push(frutaAdicionada)
}

for(f = 0; f < frutasIndividuais.length; f++){
    for(n = 0; n < frutasTotal.length; n++){
        if(frutasIndividuais[f] == frutasTotal[n]){
            frutasQuantidade[f]++
        }
    }
}

alert(`Salada inteira: ${frutasTotal.join(', ')}
    \nFrutas contidas: ${frutasIndividuais.join(', ')}
    \nQuantidade de cada fruta contida: ${frutasQuantidade.join(', ')}
`)