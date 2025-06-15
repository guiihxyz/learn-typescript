const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero) => {
    return numero * 3.5555;
});

// console.log(dobro);

//

const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.9, temDesconto: true, quantidade: 10 },
    { id: 2, nome: "Calça", preco: 89.5, temDesconto: false, quantidade: 5 },
    { id: 3, nome: "Tênis", preco: 199.99, temDesconto: true, quantidade: 3 },
    { id: 4, nome: "Boné", preco: 29.0, temDesconto: false, quantidade: 8 },
    { id: 5, nome: "Jaqueta", preco: 159.75, temDesconto: true, quantidade: 2 }
];

const novosProdutos = produtos.map(produto => {
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: "currency", currency: "BRL"
        }),
        quantidade: produto.quantidade,
    }
});

// console.log(novosProdutos);

//

const soma = numeros.reduce((acumulador, atual) => {
    const total = acumulador + atual;

    return total;
});

// console.log(soma)

//

const totalVendas = produtos.reduce((i, produto) => {
    return i + (produto.preco * produto.quantidade);
}, 0);

// console.log(totalVendas.toLocaleString('pt-br', {
//     style: "currency", currency: "BRL"
// }),)

//

const pares = numeros.filter(numero => numero % 2 === 0);

// console.log(pares)

//

const produtosEmPromocao = produtos.filter(produto => produto.temDesconto);

// console.log(produtosEmPromocao);

//

const faturamentoTotal = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10 };
}).filter(produto => produto.temDesconto)
    .reduce((i, produto) => i + (produto.preco * produto.quantidade), 0);

console.log(faturamentoTotal.toLocaleString('pt-br', {
    style: "currency", currency: "BRL"
}),)
