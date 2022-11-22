$("h1").addClass("big-title margin-left-100px");
$("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});