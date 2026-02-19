// --- PARTE A: ESCOPO ---
let app = "MinhaApp"; // Variável Global

function exibirInfo() {
    let versao = "1.0"; // Variável Local
    console.log(`App: ${app}`);
    console.log(`Versão: ${versao}`);
}

exibirInfo();

// Tentativa de exibir fora da função:
// console.log(versao); 
// EXPLICAÇÃO: O erro ocorre porque 'versao' tem escopo de bloco/função. 
// Ela só "vive" dentro das chaves da função exibirInfo. Fora delas, ela não existe para o sistema.


// --- PARTE B: CALLBACK ---
function executarTarefa(nomeTarefa, callback) {
    console.log(`Iniciando: ${nomeTarefa}`);
    callback(); // Executa a função enviada como argumento
}

// Chamada passando uma Arrow Function como callback
executarTarefa("Limpeza de Sistema", () => {
    console.log("Tarefa concluída! ✅");
});


// --- PARTE C: ASYNC ---
async function buscarPerfil() {
    return "Perfil carregado: Usuário Padrão";
}

// Usando .then() para capturar o retorno da Promise
buscarPerfil().then((resultado) => {
    console.log(resultado);
});