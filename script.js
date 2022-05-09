$(".gotham").hide();
$(".batman").hide();
$(".insane").hide();
$(".start-button").dblclick(function() {
	$(".title").hide();
    $(".firstImage").hide();
    $(".start-button").hide();
	$(".gotham").fadeIn(1000);
    $(".option-1").fadeIn();
});
$(".batman-button").click(function() {
    $(".gotham").hide();
    $(".option-1").hide();
    $(".batman").fadeIn();
    $("p").fadeIn();
    $(".reset").fadeIn();
    $(".batman-button").css("background-color", "red");
});
$(".joker-button").click(function() {
  	$(".gotham").hide();
    $(".option-1").hide();
	$(".insane").fadeIn();
	$(".text").fadeIn();
    $(".reset").fadeIn();
    $(".joker-button").css("background-color", "purple");
});
$(".reset").click(function() {
    $(".title").show();
    $(".firstImage").show();
    $(".start-button").show();
    $(".batman").hide();
    $("p").hide();
    $(".reset").hide();
    $(".insane").hide();
	$(".text").hide();
    $(".reset").hide();
});