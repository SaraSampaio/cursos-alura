let botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function(){
  console.log("Buscando pacientes");

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // especifica o tipo de requisição a ser feita e para onde queremos fazê-la
  
  xhr.addEventListener("load", function() {
    let erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    }
    else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
    
  });
  
  xhr.send(); // envia a requisião

});