var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
  /*
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode; // tr = paciente = o que queremos remover
  paiDoAlvo.remove();
  */
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function() {
    event.target.parentNode.remove();
  }, 550); // tempo em milissegundos

});