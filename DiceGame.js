"use strict";
exports.__esModule = true;
var pt1 = 0;
var pt2 = 0;
function rolarDadoJogadorUm() {
    return Math.floor(Math.random() * 6 + 1);
}
function rolarDadoJogadorDois() {
    return Math.floor(Math.random() * 6 + 1);
}
function jogarDados(d1, d2) {
    var rodadas = 0;
    while (rodadas < 5) {
        pt1 += rolarDadoJogadorUm();
        pt2 += rolarDadoJogadorDois();
        //pts = 0;
        rodadas++;

        console.log("O score do jogador Um foi de: " + pt1);
        console.log("O score do jogador Dois foi de: " + pt2);

        if (pt1 > pt2){
            console.log("Jogador um ganhou.");
        }else{
            console.log("Jogador dois ganhou");
        }

    }
}

jogarDados(6, 6);
