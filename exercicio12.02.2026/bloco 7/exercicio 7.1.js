// Versão Tradicional
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

// Versão Arrow Function (Retorno implícito)
const calcularAreaArrow = (base, altura) => (base * altura) / 2;

// Testes no Console
console.log("Área (Tradicional):", calcularArea(10, 5));  // Resultado: 25
console.log("Área (Arrow):", calcularAreaArrow(20, 10)); // Resultado: 100

// Versão Tradicional
function cumprimentar(nome, periodo) {
    return `Boa ${periodo}, ${nome}!`;
}

// Versão Arrow Function
const cumprimentarArrow = (nome, periodo) => `Boa ${periodo}, ${nome}!`;

// Testes no Console
console.log(cumprimentar("Maria", "manhã"));      // Resultado: Boa manhã, Maria!
console.log(cumprimentarArrow("João", "noite")); // Resultado: Boa noite, João!