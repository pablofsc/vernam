var mensagemOriginal;
var chave;

var mensagemCriptografada;

window.onload = function () {
    document.getElementById("criptografar").addEventListener("click", () => {
        mensagemOriginal = document.getElementById("mensagem").value;
        chave = document.getElementById("chave").value;
        if (chave.length > mensagemOriginal.length) {
            alert("A chave precisa ser menor que a mensagem.");
            return;
        }
        if (chave.length === 0) {
            alert("Insira uma chave");
            return;
        }
        mensagemCriptografada = criptografar(mensagemOriginal, chave);
    });

    document.getElementById("descriptografar").addEventListener("click", () => {
        descriptografar(mensagemCriptografada, chave, document.getElementById("chaveReinserida").value);
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

    setTimeout(() => {
        document.getElementById("mensagemCrip").innerHTML = `Mensagem criptografada: ${mensagemCriptografada.join(" ")}`;
        document.getElementById("mensagemCripCaixa").value = mensagemCriptografada.join(" ");
    }, 50);

    return (mensagemCriptografada);
}

function descriptografar(mensagemCriptografada, chave, chaveReinserida) {
    let mensagemDescriptografada = [];
    let j = 0;

    for (i = 0; i < mensagemCriptografada.length; i++) {
        if (j >= chaveReinserida.length) {
            j = 0;
        }
        let charCode = mensagemCriptografada[i] ^ chaveReinserida[j].charCodeAt(0);
        mensagemDescriptografada.push(String.fromCharCode(charCode));
        j++;
    }

    setTimeout(() => {
        document.getElementById("mensagemDescriptografada").innerHTML = `Mensagem obtida: ${mensagemDescriptografada.join("")}`;
    }, 50);
    if (chave !== chaveReinserida) {
        setTimeout(() => {
            document.getElementById("chaveErro").innerHTML = `A mensagem descriptografada está errada porque a chave "${chaveReinserida}" não é a correta`;
        }, 50);
    }
    else {
        setTimeout(() => {
            document.getElementById("chaveErro").innerHTML = "";
        }, 50);
    }

}
