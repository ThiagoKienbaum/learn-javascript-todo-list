var textElement = document.querySelector("#app p");
var inputElement = document.querySelector("#app #input");
var buttonElement = document.querySelector("#app button");

var enderecos = JSON.parse(localStorage.getItem("endereco_completo")) || {
  rua: "Santos Dummont",
  numero: "257",
  bairro: "Santo Antonio",
  cidade: "Joinville",
  uf: "SC"
};

function renderEndereco() {
  var pText = document.createTextNode(
    "O usuário mora em " +
      enderecos.cidade +
      "/" +
      enderecos.uf +
      ", no bairro " +
      enderecos.bairro +
      ", na rua Rua " +
      enderecos.rua +
      " com nº" +
      enderecos.numero +
      "."
  );

  textElement.appendChild(pText);
}

function renderForm() {
  for (endereco in enderecos) {
    var inputPlaceholder = document.createElement("input");
    var breakLine = document.createElement("br");
    switch (endereco) {
      case "rua":
        inputPlaceholder.setAttribute("placeholder", "Digite sua " + endereco);
        inputPlaceholder.setAttribute("id", endereco);
        break;
      case "numero":
        inputPlaceholder.setAttribute("placeholder", "Digite seu " + endereco);
        inputPlaceholder.setAttribute("id", endereco);
        break;
      case "bairro":
        inputPlaceholder.setAttribute("placeholder", "Digite seu " + endereco);
        inputPlaceholder.setAttribute("id", endereco);
        break;
      case "cidade":
        inputPlaceholder.setAttribute("placeholder", "Digite sua " + endereco);
        inputPlaceholder.setAttribute("id", endereco);
        break;
      case "uf":
        inputPlaceholder.setAttribute("placeholder", "Digite sua " + endereco);
        inputPlaceholder.setAttribute("id", endereco);
        break;
    }

    inputElement.appendChild(inputPlaceholder);
    inputElement.appendChild(breakLine);
  }
}

renderEndereco();
renderForm();

function addEndereco() {
  //enderecos.rua = inputPlaceholder.rua.value;
  console.log(document.querySelector("#app #input #rua").value);
  enderecos.rua = "1";
  enderecos.numero = "1";
  enderecos.bairro = "1";
  enderecos.cidade = "1";
  enderecos.uf = "1";
  renderEndereco();
  renderForm();
  saveToStorage();
}

buttonElement.onclick = function() {
  inputElement.innerHTML = "";
  //pText.innerHTML = "";
  addEndereco();
};

function saveToStorage() {
  localStorage.setItem("endereco_completo", JSON.stringify(enderecos));
}
