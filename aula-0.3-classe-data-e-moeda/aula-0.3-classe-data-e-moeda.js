class Carro { //Nomes de classes devem iniciar com a primeira letra maiuscula.
    //Atributos
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

    }
    // Método
    buzinar() {
        return "Beep! Beep!"
    }
}
// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012")
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano}`)

// Instância carrosportivo
const carroEsportivo = new Carro()
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = "2024"

console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()}`)

// Adicionando um novo atributo

carroEsportivo.corNeon = "Azul"

// Adicionando um novo

carroEsportivo.turbo =  function() {
    return "Vrummm! O carro está acelerando!!"
}

console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon de cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)