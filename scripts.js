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


$("#show").click(function() {
    $("#task2").show();
})

$("#hide").click(function() {
    $("#task2").hide();
})
$("#toggle").click(function() {
    $("#task2").toggle();
})



$("#fadein").click(function() {
    $("#img").fadeIn();
})

$("#fadeout").click(function() {
    $("#img").fadeOut();
})

$("#fadetoggle").click(function() {
    $("#img").fadeToggle();
})


$("#slideup").click(function() {
    $("#panel").slideUp();
})
    
$("#slidedown").click(function() {
    $("#panel").slideDown();
})  

$("#slidetoggle").click(function() {
    $("#panel").slideToggle();
})


$("#append").click(function() {

    $("#list").append("<li>Appended item</li>");
})

$("#prepend").click(function() {
    $("#list").prepend("<li>Prepended item</li>");
})

$("#remove").click(function() {
    $("#list li:last-child").remove();
})