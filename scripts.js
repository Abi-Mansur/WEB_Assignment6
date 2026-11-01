$(document).ready(function() {

    console.log("jquery is ready!");
});

$("#btn").click(function() {

    $("#one").text("changed text");
    $(".two").html("<b>changed text</b>");
    $("h3").css("color", "red");

});

 $("#reset").click(function() {
        $("#one").text("changing by id");
        $(".two").text("changing by class");
        $("h3").text("changing by tag");
        $("h3").css("color", "");
    });
