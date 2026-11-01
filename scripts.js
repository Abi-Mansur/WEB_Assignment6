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

$("#ChgImg").click(function() {

    $("#horse").attr("src", "https://i.pinimg.com/736x/51/4c/11/514c11a836fc1518b432e3e894125ff7.jpg");

})

$("#resetImg").click(function() {

    $("#horse").attr("src", "https://i.pinimg.com/736x/67/ed/0f/67ed0f58496c94e0f26bfef7fae9765c.jpg");})


$("#changeLink").click(function() {

    $("#newLink").attr("href", "https://vk.ru/feed");
    $("#newLink").text("VK");
})


$("#name").on("input", function() {

    var v = $(this).val();
    $("#liveName").text("you typed: " + v);

})

$("#email").on("input", function() {

    var v = $(this).val();
    $("#liveEmail").text("you typed: " + v);

})

$("#btn8").click(function() {
    $("#box8").animate({
        width: "200px",
        height: "200px",
        left: "200px"
    }, 1000);
});

$("#btn9").click(function() {
    $("#box9")
        .animate({left: "200px"}, 1000)
        .animate({top: "200px"}, 1000)
        .animate({width: "50px", height: "50px"}, 1000)
        .animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px"
        }, 1000);
});

$("#btn10").click(function() {
    $("#box10").animate({
        opacity: 0.3,
        width: "200px",
        height: "200px",
        left: "200px",
        top: "100px"
    }, 1000);
});
