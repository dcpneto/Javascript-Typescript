export { }
let jogador1: number = 0;
let jogador2: number = 0;
function lancarDados() {
    //
    let jogadas: number = 5;
    let i: number = 0;
    let x: number = 0;
    let y: number = 0;
    while (i < jogadas) {
        i += 1;
        x = obterInt(1, 6);
        y = obterInt(1, 6);
        //Soma dos resultados de cada jogador.
        jogador1 += x;
        jogador2 += y;
    }

    return `Jogador 1: ${jogador1} Pontos! \nJogador 2: ${jogador2} Pontos! \n `;
    
}


function obterInt(min: number, max: number): any {
    min = Math.ceil(min); //arredonda para cima
    max = Math.floor(max); //arredonda para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(lancarDados())