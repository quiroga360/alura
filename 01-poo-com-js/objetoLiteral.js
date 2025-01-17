const user = {
  nome: "Pablo",
  email: "p@p.com",
  nascimento: "2024-01-17",
  role: "",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

user.exibirInfos()
