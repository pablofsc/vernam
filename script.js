var m;
var k;

var mc;

window.onload = function () {
    document.getElementById("criptografar").addEventListener("click", () => {
        do {
            m = prompt("Digite a mensagem a ser criptogradada");
            k = prompt("Digite a chave a ser usada");
        } while (k.length > m.length && !alert("A chave precisa ser menor que a mensagem."));

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

    alert(mensagemCriptografada.join(" "));

    return (mensagemCriptografada);
}

function desc(mensagemCriptografada, chave) {
    let mensagemDescriptografada = [];
    let j = 0;

    for (i = 0; i < mensagemCriptografada.length; i++) {
        if (j >= chave.length) {
            j = 0;
        }
        let charCode = mensagemCriptografada[i] ^ chave[j].charCodeAt(0);
        mensagemDescriptografada.push(String.fromCharCode(charCode));
        j++;
    }

    alert(mensagemDescriptografada.join(""));
}

