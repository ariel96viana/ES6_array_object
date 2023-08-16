let listaDeAlunos = [];
const alunos = new Map();

novoAluno();

alunos.forEach((nota, aluno) => {
  listaDeAlunos.push({ nome: aluno, nota: nota });
});

const alunosAprovados = listaDeAlunos.filter((aluno) => aluno.nota >= 6);

alunosAprovados.forEach((aluno) => {
  console.log(
    `Parabéns, ${aluno.nome}, você foi aprovado com nota: ${aluno.nota}`
  );
});

function novoAluno() {
  alunos.set("Ariel", "5");
  alunos.set("Mariana", "10");
  alunos.set("Evandro", "4");
  alunos.set("Nilza", "7");
  alunos.set("Nilza", "7");
}
