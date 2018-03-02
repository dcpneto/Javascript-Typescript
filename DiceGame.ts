export{}

let pt1 : number = 0
let pt2 : number = 0

function rolarDado(){
    return Math.floor(Math.random()*6+1);
}

function jogarDados(d1: number, d2:number){

    let rodadas : number = 0;

    while (rodadas < 5){
        pt1 += rolarDado();
        pt2 += rolarDado();
        
        //pts = 0;
        rodadas++;
    }

    jogarDados(6,6);
    console.log("O score do jogador Um foi de: " + pt1);        
}
console.log("O score do jogador Um foi de: " + pt1);