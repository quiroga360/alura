// importar file system
const fs = require("fs");

// ler path do arquivo
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

// ler arquivo
fs.readFile(link, "UTF-8", (erro, texto) => {
  //verificaPalavrasDuplicadas(texto);
  quebraEmParagrafos(texto);
});

// criar um array de palavras
// contar as ocorrências
// montar um objeto com o resultado

function quebraEmParagrafos(textoInput) {
  const paragrafos = textoInput.toLowerCase().split("\n");
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });

  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(textoInput) {
  const listaPalavras = textoInput.split(" ");
  const resultado = {};

  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });

  console.log(resultado);
}

// continuar em separando em parágrafos
