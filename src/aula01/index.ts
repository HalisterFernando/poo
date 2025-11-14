// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

/*class Estudante {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaProva3: number;
    notaProva4: number;
    notaTrabalho1: number;
    notaTrabalho2: number;

    constructor(
        matricula: number,
        nome: string,
        notaProva1: number,
        notaProva2: number,
        notaProva3: number,
        notaProva4: number,
        notaTrabalho1: number,
        notaTrabalho2: number,) {

        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1 
        this.notaProva2 = notaProva2
        this.notaProva3 = notaProva3
        this.notaProva4 = notaProva4
        this.notaTrabalho1 = notaTrabalho1
        this.notaTrabalho2 = notaTrabalho2

    }
}*/

//Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class Estudante {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaProva3: number;
    notaProva4: number;
    notaTrabalho1: number;
    notaTrabalho2: number;

    constructor(
        matricula: number,
        nome: string,
        notaProva1: number,
        notaProva2: number,
        notaProva3: number,
        notaProva4: number,
        notaTrabalho1: number,
        notaTrabalho2: number,) {

        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1 
        this.notaProva2 = notaProva2
        this.notaProva3 = notaProva3
        this.notaProva4 = notaProva4
        this.notaTrabalho1 = notaTrabalho1
        this.notaTrabalho2 = notaTrabalho2

    }

    somaNotas():number{
        const soma = this.notaProva1 + this.notaProva2 + this.notaProva3 + this.notaProva4
        console.log(soma)
        return soma
    }

    mediaNotas():number{
        const media = (this.notaProva1 + this.notaProva2 + this.notaProva3 + this.notaProva4)/4
        console.log(media)
        return media
    }
}

const pedro: Estudante = new Estudante(1, 'Pedro', 10, 8, 7, 8, 9, 8)
//console.log(pedro)
//console.log(pedro.mediaNotas())
//console.log(pedro.somaNotas())

/*Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido. 
A pessoa cliente deverá conter o nome;
O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.
*/

class Client {
    nome: string;

    constructor(nome: string) {
        this.nome = nome

    }
}

class Order {
   client: Client
   orderedItems: OrderedItems[]
   paymentMethod: string
   discount?: number | undefined
   
   constructor(client: Client, orderedItems: OrderedItems[], paymentMethod: string, discount?: number | undefined) {
        this.client = client
        this.orderedItems = orderedItems
        this.paymentMethod = paymentMethod
        this.discount = discount
   }

   total(): number {
    const total = this.orderedItems.map((order) => order.price).reduce((acc, price) => acc + price, 0 )

    return total
   }
   totalWithDiscount():number | void {
    if (this.discount !== undefined) {
        const discount = this.total()*this.discount
        const newPrice = this.total() - discount
        return newPrice
    }
    console.log(`Sorry, no discount tickets were found`)
   }

}

class OrderedItems {
    item: string;
    price: number;

    constructor(item: string, price: number){
        this.item = item
        this.price = price

    }
}

const joao: Client = new Client('João');
const order1: OrderedItems = new OrderedItems('lanche', 10,); 
const order2: OrderedItems = new OrderedItems('suco', 5,);

const joaoOrders: Order = new Order(joao, [order1, order2], 'crédito')
console.log(joaoOrders)
console.log(joaoOrders.total())
console.log(joaoOrders.discount)
console.log(joaoOrders.totalWithDiscount())

/*Exercício 5: Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.

Exercício 6: Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:

constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor “01/01/1900”;
getMonthName: retorna o mês da data por extenso;
isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
0 se as datas forem iguais;
1 se a data corrente for posterior à data do parâmetro;
-1 se a data do parâmetro for posterior à data corrente.
format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.
Legenda:
aaaa = ano com quatro dígitos
aa = ano com dois dígitos
mm = mês com 2 dígitos
M = mês por extenso
dd = dia com 2 dígitos
Exemplos:
“dd/mm/aaaa” = 01/01/1900
“aaaa-mm-dd” = 1900-01-01
“dd de M de aa” = 01 de janeiro de 90
“dd, M de aaaa” = 01, janeiro de 1990

*/

class Data {
    day: number;
    month: number;
    year: number;

    constructor(d:number, m: number, y: number) {


        this.day = d;
        this.month = m;
        this.year = y;
    }
}

console.log(new Date("02-29-2025").getTime())
