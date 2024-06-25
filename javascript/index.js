document.getElementById("meu-botao").addEventListener("click", function() {
    alert("Obrigado por se cadastrar, entraremos em contato assim que possível!!!");
    var inputs = document.querySelectorAll("#form");
    inputs.forEach(function(input) {
        input.value = "";
    });
});