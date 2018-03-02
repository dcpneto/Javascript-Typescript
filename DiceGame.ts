export{}

let pt1 : number = 0
let pt2 : number = 0

function rolarDadoJogadorUm(){
    return Math.floor(Math.random()*6+1);
}

function rolarDadoJogadorDois(){
    return Math.floor(Math.random()*6+1);
}

function jogarDados(d1: number, d2:number){

    let rodadas : number = 0;

    while (rodadas < 5){
        pt1 += rolarDadoJogadorUm();
        pt2 += rolarDadoJogadorDois();
        
        rodadas++;
        console.log("O score do jogador Um foi de: " + pt1);
        console.log("O score do jogador Dois foi de: " + pt2);
        
    }

    jogarDados(6,6);       
}

jogarDados(6,6);
