var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function habilidadesUsuarios(usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    let resultUsuario = usuarios[i].nome;
    let resultHabilidade = usuarios[i].habilidades.join(", ");

    console.log(
      "O " + resultUsuario + " possui as habilidades: " + resultHabilidade + "."
    );
  }
}

habilidadesUsuarios(usuarios);
