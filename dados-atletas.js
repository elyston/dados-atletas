class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
        this.notas = notas
    }
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){return "Infantil"}
        else if(this.idade >= 12 && this.idade <= 13){return "Juvenil"}
        else if(this.idade >= 14 && this.idade <= 15){return "Intermediario"}
        else if(this.idade >= 16 && this.idade <= 30){return "Adulto"}
        return "Sem categoria"
    }
    calculaIMC(){
        return Number.parseFloat(this.peso)/Number.parseFloat(this.altura)^2
    }
    calculaMediaValida(){
        let media = 0
        this.notas.forEach(function(nota){
            media += Number.parseFloat(nota)
        })
        return media/this.notas.length
        
        
    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas.join(", ")}`
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`        
    }
    obtemcategoria(){
        return `Categoria: ${this.calculaCategoria()}`
    }
    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`
    }
    obtemMediaValida(){
        return `Média: ${this.calculaMediaValida()}`
    }
    obtemAlturaAtleta(){
        return `Altura: ${this.altura}`
    }
}










const atleta = new Atleta("Cesar Abascal",30,80,1.70,[10,9.34,8.42,10,7.88])

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemcategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())