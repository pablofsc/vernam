var m;
var k;

var mc;

window.onload = function () {
    document.getElementById("criptografar").addEventListener("click", () => {
        m = prompt("Digite a mensagem a ser criptogradada");
        k = prompt("Digite a chave a ser usada");

        mc = criptografar(m, k);
    });

    document.getElementById("descriptografar").addEventListener("click", () => {
        desc(mc, k);
    });
}

function criptografar(mensagem, chave) {
    let mensagemCriptografada = [];
    let j = 0;

    for (i = 0; i < mensagem.length; i++) {
        if (j >= chave.length) {
            j = 0;
        }
        mensagemCriptografada.push(mensagem.charCodeAt(i) ^ chave.charCodeAt(j));
        j++;
    }

    alert(mensagemCriptografada);

    return (mensagemCriptografada);
}

function desc(mensagem, chave) {
    let mensagemDescriptografada = [];
    let j = 0;

    for (i = 0; i < mensagem.length; i++) {
        if (j >= chave.length) {
            j = 0;
        }
        mensagemDescriptografada.push(String.fromCharCode(mensagem[i] ^ chave[j]));
        j++;
    }

    alert(mensagemDescriptografada);
}

