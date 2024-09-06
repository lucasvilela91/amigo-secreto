let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // Padroniza o nome para maiuscula
    let nomeAmigo = amigo.value.trim().toUpperCase();

    if (amigo.value == '') {
        alert('Por favor, digite o nome de um amigo.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome de amigo ja foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Por favor, digite o nome de pelo menos 4 amigos.')
        return;
    }


    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    if (sorteio.innerHTML !== '') {
        return; // Evita sortear novamente
    }

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }

}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}