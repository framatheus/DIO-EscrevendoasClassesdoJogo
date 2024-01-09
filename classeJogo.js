class Heroi{
    constructor(nome, idade, tipo) {
        this.nome = prompt("Digite o nome do herói: ");
        this.idade = parseInt(prompt("Digite a idade do herói: "));
        this.tipo = prompt("Digite o tipo do herói (guerreiro, mago, monge, ninja): ").toLowerCase();
    }
        atacar(){
            let ataque;
                
                switch(this.tipo){
                    case "mago":
                        ataque = "usou magia";
                        break;
                    case "guerreiro":
                        ataque = "usou espada";
                        break;
                    case "monge":
                        ataque = "usou artes marciais";
                        break;
                    case "ninja":
                        ataque = "usou shuriken";
                        break;
                    default:
                        ataque = "Não atacou";
                }
            alert(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
}
}
