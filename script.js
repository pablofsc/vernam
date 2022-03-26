var m;
var k;

var mc;

window.onload = function () {
    document.getElementById("criptografar").addEventListener("click", () => {
        m = document.getElementById("mensagem").value;
        k = document.getElementById("chave").value;
        if (k.length > m.length) {
            alert("A chave precisa ser menor que a mensagem.");
            return;
        }
        if (k.length === 0) {
            alert("Insira uma chave");
            return;
        }
        mc = criptografar(m, k);
    });

    document.getElementById("descriptografar").addEventListener("click", () => {
        desc(mc, k, document.getElementById("chaveReinserida").value);
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

function desc(mensagemCriptografada, chave, chaveReinserida) {
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
        document.getElementById("mensagemDescriptografada").innerHTML = `Mensagem obtida foi: ${mensagemDescriptografada.join(" ")}`;
    }, 50);
    if (chave !== chaveReinserida) {
        setTimeout(() => {
            document.getElementById("chaveErro").innerHTML = `Mensagem obtida está errada porque a chave ${chaveReinserida} está errada`;
        }, 50);
    }
    else {
        setTimeout(() => {
            document.getElementById("chaveErro").innerHTML = "";
        }, 50);
    }

}
