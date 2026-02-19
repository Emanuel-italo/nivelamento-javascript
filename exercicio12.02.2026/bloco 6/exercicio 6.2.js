// 1. Declaramos a variável de início
let contagem = 10;

// 2. O loop rodará ENQUANTO a contagem for maior ou igual a 1
while (contagem >= 1) {
    console.log(contagem);
    
    // 3. IMPORTANTÍSSIMO: Subtraímos 1 a cada volta (decremento)
    // Se esquecer isso, o loop fica infinito!
    contagem--; 
}

// 4. Mensagem final após sair do loop
console.log("🚀 Lançamento!");