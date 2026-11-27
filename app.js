
const personagens = [
    {
        id: 1,
        nome: "elias vance",
        descricao: "Um guerreiro habilidoso, conhecido por sua coragem e força nas batalhas. Protege seus aliados e enfrenta qualquer desafio.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Elias+Vance"
    },
    {
        id: 2,
        nome: "eris",
        descricao: "Uma personagem misteriosa que domina poderes mágicos. Sua inteligência e magia fazem dela uma grande ameaça.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Eris"
    },
    {
        id: 3,
        nome: "mister paul",
        descricao: "Um personagem enigmático, cheio de segredos e conhecimentos. Sua presença pode mudar o destino de uma aventura.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Mister+Paul"
    },
    {
        id: 4,
        nome: "crocodilo selvagem",
        descricao: "Uma criatura feroz e perigosa. Possui grande resistência e força, sendo um adversário temido.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Crocodilo"
    },
    {
        id: 5,
        nome: "guerreiro",
        descricao: "Especialista em combate físico. Possui grande defesa e protege o grupo dos inimigos.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Guerreiro"
    },
    {
        id: 6,
        nome: "mago",
        descricao: "Domina feitiços poderosos e ataques mágicos. Usa inteligência e energia para vencer batalhas.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Mago"
    },
    {
        id: 7,
        nome: "arqueiro",
        descricao: "Especialista em ataques à distância. Possui precisão e agilidade para derrotar seus inimigos.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Arqueiro"
    },
    {
        id: 8,
        nome: "gryffindor",
        descricao: "Uma casa conhecida pela coragem, bravura e determinação de seus integrantes.",
        imagem: "https://placehold.co/300x300/302044/ffffff?text=Gryffindor"
    }
];

let personagemAtual = 0;

const imagem = document.getElementById("imagem");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const contador = document.getElementById("contador");

function mostrarPersonagem() {
    const personagem = personagens[personagemAtual];

    imagem.src = personagem.imagem;
    imagem.alt = personagem.nome;
    nome.textContent = personagem.nome.toUpperCase();
    descricao.textContent = personagem.descricao;

    contador.textContent =
        `Personagem ${personagemAtual + 1} de ${personagens.length}`;
}

// Botão próximo
document.getElementById("next").addEventListener("click", () => {
    personagemAtual++;

    if (personagemAtual >= personagens.length) {
        personagemAtual = 0;
    }

    mostrarPersonagem();
});

// Botão anterior
document.getElementById("prev").addEventListener("click", () => {
    personagemAtual--;

    if (personagemAtual < 0) {
        personagemAtual = personagens.length - 1;
    }

    mostrarPersonagem();
});

// Campo de busca
document.getElementById("busca").addEventListener("input", (evento) => {
    const busca = evento.target.value.trim().toLowerCase();

    if (busca === "") {
        return;
    }

    const encontrado = personagens.find(p =>
        p.nome.includes(busca)
    );

    if (encontrado) {
        personagemAtual = personagens.indexOf(encontrado);
        mostrarPersonagem();
    }
});

// Mostra o primeiro personagem ao abrir o site
mostrarPersonagem();
