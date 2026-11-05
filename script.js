
let estudantes = [];
let estudantesFinalizados = false;

function adicionarEstudante() {
    const campo = document.getElementById("nomeEstudante");
    const nome = campo.value.trim();

    if (nome === "") {
        alert("Digite o nome do estudante!");
        return;
    }

    if (estudantesFinalizados) {
        alert("O cadastro de estudantes já foi finalizado.");
        return;
    }

    if (nome.toUpperCase() === "PARE") {
        estudantesFinalizados = true;

        document.getElementById("resultadoEstudantes").innerHTML =
            `<strong>Total de estudantes: ${estudantes.length}</strong>
            <ul>${estudantes.map(nome => `<li>${nome}</li>`).join("")}</ul>
            <p>Cadastro finalizado!</p>`;

        campo.disabled = true;
        return;
    }

    estudantes.push(nome);

    document.getElementById("resultadoEstudantes").innerHTML =
        `Estudantes cadastrados: ${estudantes.length}<br>
        ${estudantes.join("<br>")}`;

    campo.value = "";
    campo.focus();
}



const planetas = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão"
];

document.getElementById("listaPlanetas").innerHTML =
    "<strong>Planetas disponíveis:</strong><ul>" +
    planetas.map(planeta => `<li>${planeta}</li>`).join("") +
    "</ul>";

function buscarPlaneta() {
    const campo = document.getElementById("nomePlaneta");
    const nome = campo.value.trim();

    if (nome === "") {
        alert("Digite o nome de um planeta!");
        return;
    }

    const existe = planetas.some(
        planeta => planeta.toLowerCase() === nome.toLowerCase()
    );

    if (existe) {
        document.getElementById("resultadoPlaneta").innerHTML =
            `O planeta ${nome} está na lista!`;
    } else {
        document.getElementById("resultadoPlaneta").innerHTML =
            `O planeta ${nome} não está na lista.`;
    }

    campo.value = "";
}


let frutas = [
    "Maçã",
    "Banana",
    "Laranja",
    "Uva",
    "Morango",
    "Abacaxi"
];

let comprasFinalizadas = false;

function atualizarFrutas() {
    const lista = document.getElementById("listaFrutas");

    if (frutas.length === 0) {
        lista.innerHTML = "Lista de compras finalizada!";
        return;
    }

    lista.innerHTML =
        "<strong>Frutas disponíveis:</strong><ul>" +
        frutas.map(fruta => `<li>${fruta}</li>`).join("") +
        "</ul>";
}

atualizarFrutas();

function removerFruta() {
    const campo = document.getElementById("nomeFruta");
    const nome = campo.value.trim();

    if (nome === "") {
        alert("Digite o nome de uma fruta!");
        return;
    }

    if (comprasFinalizadas) {
        alert("A lista de compras já foi finalizada.");
        return;
    }

    if (nome.toUpperCase() === "PARE") {
        comprasFinalizadas = true;
        atualizarFrutas();

        document.getElementById("resultadoFruta").innerHTML =
            "Lista de compras encerrada!";

        campo.disabled = true;
        return;
    }

    const indice = frutas.findIndex(
        fruta => fruta.toLowerCase() === nome.toLowerCase()
    );

    if (indice !== -1) {
        frutas.splice(indice, 1);

        document.getElementById("resultadoFruta").innerHTML =
            "Fruta foi retirada da lista.";

        atualizarFrutas();

        if (frutas.length === 0) {
            comprasFinalizadas = true;

            document.getElementById("resultadoFruta").innerHTML =
                "Lista de compras finalizada!";

            campo.disabled = true;
        }
    } else {
        document.getElementById("resultadoFruta").innerHTML =
            "Fruta indisponível no nosso mercado.";
    }

    campo.value = "";
}



let contatos = [];

function adicionarContato() {
    const nome = document.getElementById("nomeContato").value.trim();
    const telefone = document.getElementById("telefoneContato").value.trim();

    if (nome === "" || telefone === "") {
        alert("Preencha o nome e o telefone!");
        return;
    }

    const contato = {
        nome: nome,
        telefone: telefone
    };

    contatos.push(contato);

    document.getElementById("nomeContato").value = "";
    document.getElementById("telefoneContato").value = "";

    atualizarContatos();

    document.getElementById("resultadoContatos").innerHTML =
        "Contato adicionado com sucesso!";
}


function buscarContato() {
    const nome = document.getElementById("buscarContato").value.trim();

    if (nome === "") {
        alert("Digite o nome para buscar!");
        return;
    }

    const encontrado = contatos.find(
        contato => contato.nome.toLowerCase() === nome.toLowerCase()
    );

    if (encontrado) {
        document.getElementById("resultadoContatos").innerHTML =
            `Nome: ${encontrado.nome}<br>
             Telefone: ${encontrado.telefone}`;
    } else {
        document.getElementById("resultadoContatos").innerHTML =
            "Contato não encontrado";
    }

    document.getElementById("buscarContato").value = "";
}


function removerContato() {
    const nome = document.getElementById("buscarContato").value.trim();

    if (nome === "") {
        alert("Digite o nome para remover!");
        return;
    }

    const indice = contatos.findIndex(
        contato => contato.nome.toLowerCase() === nome.toLowerCase()
    );

    if (indice !== -1) {
        contatos.splice(indice, 1);

        document.getElementById("resultadoContatos").innerHTML =
            "Contato removido!";

        atualizarContatos();
    } else {
        document.getElementById("resultadoContatos").innerHTML =
            "Contato não encontrado";
    }

    document.getElementById("buscarContato").value = "";
}


function listarContatos() {
    const resultado = document.getElementById("resultadoContatos");

    if (contatos.length === 0) {
        resultado.innerHTML = "Nenhum contato cadastrado.";
        return;
    }

    resultado.innerHTML =
        "<strong>Lista de contatos:</strong><ul>" +
        contatos.map(contato =>
            `<li>${contato.nome} - ${contato.telefone}</li>`
        ).join("") +
        "</ul>";
}


function atualizarContatos() {
    document.getElementById("totalContatos").innerText = contatos.length;
}


function limparContatos() {
    contatos = [];

    atualizarContatos();

    document.getElementById("resultadoContatos").innerHTML =
        "Todos os contatos foram removidos!";
}


function sairAgenda() {
    document.getElementById("resultadoContatos").innerHTML =
        `Agenda encerrada. Total de contatos: ${contatos.length}`;

    document.getElementById("nomeContato").disabled = true;
    document.getElementById("telefoneContato").disabled = true;
    document.getElementById("buscarContato").disabled = true;
}