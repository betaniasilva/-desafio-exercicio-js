const estudantes = [
  {
    nome: "João",
    notaPrimeiraProva: 8.5,
    notaSegundaProva: 7.0,
  },
  {
    nome: "Maria",
    notaPrimeiraProva: 9.0,
    notaSegundaProva: 8.5,
  },
  {
    nome: "Pedro",
    notaPrimeiraProva: 6.0,
    notaSegundaProva: 5.5,
  },
  {
    nome: "Ana",
    notaPrimeiraProva: 7.5,
    notaSegundaProva: 6.5,
  },
];

function calcularMedia(estudante) {
  const media = (estudante.notaPrimeiraProva + estudante.notaSegundaProva) / 2;
  return media;
}

function verificarSucesso(estudante) {
  const media = calcularMedia(estudante);
  if (media >= 7) {
    alert(
      `A média de ${estudante.nome} é ${media.toFixed(2)}. \nParabéns ${
        estudante.nome
      } você teve sucesso no concurso!`
    );
  } else {
    alert(
      `A média de ${estudante.nome} é ${media.toFixed(2)}.\nNão foi dessa vez ${
        estudante.nome
      }! Tente novamente!.`
    );
  }
}

estudantes.forEach((estudante) => {
  verificarSucesso(estudante);
});
