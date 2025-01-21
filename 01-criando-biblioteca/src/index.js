// importar file system
const fs = require("fs");

// ler path do arquivo
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

// ler arquivo
fs.readFile(link, "UTF-8", (erro, texto) => {
  console.log(texto);
});
