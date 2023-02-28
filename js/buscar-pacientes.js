var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    var url = "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.addEventListener("load", function () {
        
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var paciente = JSON.parse(resposta);

            paciente.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            classList.remove("invisivel");
        }

    });
    xhr.send();

});