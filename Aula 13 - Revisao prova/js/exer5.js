$(function(){
    setInterval(function(){
    $('#piscar').fadeOut("fast");
    $('#piscar').fadeIn("fast");
    }, 3000);

})

$(document).ready(function(){
    $('#enviar').click(function(){
        var Texto = $('#texto').val();
        if (Texto == "IA"){
            $("#segunda").css("background-color", "red");
            $("#segunda").css("color", "white");
        }
        if (Texto == "Matematica"){
            $("#terca").css("background-color", "red");
            $("#terca").css("color", "white");
        }
        if (Texto == "Estrutura de Dados"){
            $("#quarta").css("background-color", "red");
            $("#quarta").css("color", "white");
        }
        if (Texto == "Framework 2"){
            $("#quinta").css("background-color", "red");
            $("#quinta").css("color", "white");
        }
        if (Texto == "Empreendedorismo"){
            $("#sexta").css("background-color", "red");
            $("#sexta").css("color", "white");
        }
    })
})

$(document).ready(function(){
    $('#enviar').click(function(){
        var Texto1 = $('#texto').val();
        if (Texto1 == "IA"){
            $("#segunda1").css("background-color", "red");
            $("#segunda1").css("color", "white");
        }
        if (Texto1 == "Matematica"){
            $("#terca1").css("background-color", "red");
            $("#terca1").css("color", "white");
        }
        if (Texto1== "Estrutura de Dados"){
            $("#quarta1").css("background-color", "red");
            $("#quarta1").css("color", "white");
        }
        if (Texto1 == "Framework 2"){
            $("#quinta1").css("background-color", "red");
            $("#quinta1").css("color", "white");
        }
        if (Texto1 == "Empreendedorismo"){
            $("#sexta1").css("background-color", "red");
            $("#sexta1").css("color", "white");
        }
    })
})