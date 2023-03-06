var musicas = document.getElementsByClassName('musica');
var x = document.getElementsByClassName('music');
var escolha = 12, escolha2;
var historico = new Array();
var opcoes = [12,12,12,12];

console.log("musica escolhida: ", escolha);

function volta_tudo(){
    document.getElementById('opcoes').style.display = "flex";
    document.getElementById('campo_resultado').style.display = "none";
    document.getElementById('play_pause').style.display = "flex";     
    x[escolha2].style.display = "none";

    Pause();

    musica_nova();
}

function escolha_opcao(){
    document.getElementById('play_pause').style.display = "none";
    document.getElementById('opcoes').style.display = "none";
    x[escolha2].style.display = "flex";

    document.getElementById('campo_resultado').style.display = "flex";
    if(this.id == escolha2){
        document.getElementById('resultado').classList.remove("errou");
        document.getElementById('resultado').classList.add("acertou");
        document.getElementById('resultado').textContent = "Acertou";
    }
    else{
        document.getElementById('resultado').classList.remove("acertou");
        document.getElementById('resultado').classList.add("errou");
        document.getElementById('resultado').textContent = "Errou";
    }

    console.log("sala escolhida: ", this.id);
    console.log("Musica escolhida: ", escolha2);
}

function musica_nova(){
    escolha = getRandomInt(0, 11);

       
    musicas[escolha].currentTime = 0;
    console.log("vouto");

    escolha2 = escolha;
    if(verifica_musica(escolha)){
        musica_nova();
    }

    console.log(escolha)
    Opcoes(escolha);
    
    // musicas[escolha].play();
    // musicas[escolha].autoplay="true";
}

function verifica_musica(musica_escolhida){
    for(var i = 0; i < historico.length; i++){
        if(historico[i] == musica_escolhida){
            return false;
            console.log(historico);
            break;
        }else{
            historico.push(musica_escolhida);
            return true;
        }
    }
}

function Play(){
    
    var img1 = document.getElementById('Play');
    var img2 = document.getElementById('Pause');

    img1.style.display="none";
    img2.style.display="block";

    if(escolha = 999){
        escolha = escolha2;
    }else{
        musica_nova();
    }

    musicas[escolha].play();

    console.log(escolha);

    // switch (escolha) {
    //     case 0:
    //         musicas[0].play();
    //     break;
    //     case 1:
    //         musicas[1].play();
    //     break;
    //     case 2:
    //         musicas[2].play();
    //     break;
    //     case 3:
    //         musicas[3].play();
    //     break;
    //     case 4:
    //         musicas[4].play();
    //     break;
    //     case 5:
    //         musicas[5].play();
    //     break;
    //     case 6:
    //         musicas[6].play();
    //     break;
    //     case 7:
    //         musicas[7].play();
    //     break;    
    //     case 8:
    //         musicas[8].play();
    //     break;    
    //     case 9:
    //         musicas[9].play();
    //     break;    
    //     case 10:
    //         musicas[10].play();
    //     break;    
    //     case 11:
    //         musicas[11].play();
    //     break;
    //     case 12:
    //         musicas[12].play();
    //     break;            
    //     case 12:
    //         musicas[12].play();
    //     break;            
    //     case 14:
    //         musicas[14].play();
    //     break;            
    //     case 15:
    //         musicas[15].play();
    //     break;            
    //     case 16:
    //         musicas[16].play();
    //     break;            
    //     case 17:
    //         musicas[17].play();
    //     break;            
    //     case 18:
    //         musicas[18].play();
    //     break;            
    //     case 19:
    //         musicas[19].play();
    //     break;            
    //     case 20:
    //         musicas[20].play();
    //     break;            
    //     case 21:
    //         musicas[21].play();
    //     break;                        
       
    //     default:
    //       console.log("merda");
    // }
}

function Opcoes(certa){
    opcoes = [12,12,12,12];

    for(var i = 0;i < 4;i++){
        var teste;
        var deu = true;
        
        while(deu){
            teste = getRandomInt(0, 11);
            //console.log(opcoes);

            //Se o valor de teste não estiver dentro de opcoes, ele salva
            if(-1 == opcoes.indexOf(teste)){
                opcoes[i] = teste;
                deu = false;
                //console.log(opcoes);    
            }
            
        }

        
    }

    //console.log("Deu certo: ", opcoes);

    //Se o valor de certa não estiver em opcoes, ele escolhe uma posição, e coloca o valor nela
    console.log("coloca dentro: ", -1 == opcoes.indexOf(certa));
    if(-1 == opcoes.indexOf(certa)){
        opcoes[getRandomInt(0, 3)] = certa;
        //console.log("Opção certa: ", certa);
        //console.log("Como ficou: ",opcoes);
    }

    MostraOpcoes();
}

function MostraOpcoes(){
    var button_opcao = document.getElementsByClassName('button_opcao');

    for(var i = 0;i < 4;i++){

        button_opcao[i].textContent = x[opcoes[i]].textContent;       
        
        button_opcao[i].addEventListener("click", escolha_opcao);

        button_opcao[i].id = opcoes[i];
    }


}

function Pause(){
    var img1 = document.getElementById('Play');
    var img2 = document.getElementById('Pause');

    img1.style.display="block";
    img2.style.display="none";

    musicas[escolha].pause();

    escolha = 999;
    
};

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
};
