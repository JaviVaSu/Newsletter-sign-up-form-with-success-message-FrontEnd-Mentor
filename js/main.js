$(document).ready(function() {
    $("#subscribe").click(function(){
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $("#error").css("display", "block");
            $("#email").css("background-color", "var(--Tomato-opacity)");
            $("#email").css("color", "var(--Tomato)");
        }else{
            $("#error").css("display", "none");
            $("#email").css("background-color", "transparent");
            $("#email").css("color", "var(--Charcoal-Grey)");
            $("#contenedor").css("display", "none");
            $("#tks").css("display", "flex");
            $("#tks-div").css("display", "flex");
            $("#body").css("background-color", "var(--Charcoal-Grey)");
            $("#correo").html($("#email").val());
        }
    });

    $("#dismiss").click(function(){
        $("#contenedor").css("display", "flex");
        $("#tks").css("display", "none");
        $("#tks-div").css("display", "none");
        $("#email").val('');
    });
});