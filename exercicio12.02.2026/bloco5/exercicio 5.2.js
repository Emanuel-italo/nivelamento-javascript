// 1. Declaramos a variável com um valor de 1 a 7
let diaSemana = 3; 

// 2. Utilizamos o switch para verificar o valor
switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        // 3. Caso o valor não seja nenhum dos acima
        console.log("Dia inválido.");
        break;
}