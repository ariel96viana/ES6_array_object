let listaDeAlunos = [];
const alunos = new Map();

novoAluno();

alunos.forEach((nota, aluno) => {
  listaDeAlunos.push({ nome: aluno, nota: nota });
});

listaDeAlunos.forEach((aluno) => {
  if (aluno.nota >= 6) {
    console.log(`Parabéns ${aluno.nome}, você passou!`);
  }
});

function novoAluno() {
  let nome = "Ariel";
  let nota = "5";
  alunos.set(nome, nota);

  nome = "Mariana";
  nota = "10";
  alunos.set(nome, nota);

  nome = "Evandro";
  nota = "4";
  alunos.set(nome, nota);

  nome = "Nilza";
  nota = "7";
  alunos.set(nome, nota);

  nome = "Nilza";
  nota = "7";
  alunos.set(nome, nota);
}
