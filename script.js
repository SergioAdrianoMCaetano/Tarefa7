var form = document.forms["form-mod7"];

/*function validaNumero(numberB){
    const numeroMaior = numberB;
    return numeroMaior;
}*/

form.addEventListener('submit', function (e){
    //let formValido = false;
    e.preventDefault();

    const numA = document.getElementById("numeroA");
    const numB = document.getElementById("numeroB");
    const mensagemSucesso = `O valor de ${numB.value} é maior que o valor de ${numA.value}`;

    //formValido = validaNumero(numB.value, numA.value);
    const numeroMaior = Math.max(numB.value);
    const numeroMenor = Math.min(numA.value);
    if(numeroMaior > numeroMenor){
        alert(mensagemSucesso);

        numA.value = " ";
        numB.value = " ";

    }else{
        alert("O primeiro valor é maior que o segundo valor");
    }

    });




