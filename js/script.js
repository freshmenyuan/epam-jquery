// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
	$("#before p").before("Yo! ");
});

$("#css1 button").click(function() {
	$("#css1 p").css("font-size","20px");
});

$("#css2 button").click(function() {
	$("#css2 p").css({"color":"blue","font-size":"20px"});
});

$("#attr1 button").click(function() {
	console.log($("#attr1 p a").attr("href"));
});

$("#attr2 button").click(function() {
    $("#attr2 p a").attr("href", "http://www.google.com");
});

$("#class1 button").click(function() {
	$("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
    alert($("#class2 p").hasClass("lead"));
});

$("#form1 button").click(function() {
    console.log($("#form1 #exampleInputEmail1").val());
});

$("#form2 button").click(function() {
    $("#form2 #exampleInputName2").val("yuan");
});

// handle the mouseover event here

// handle the form events here

$("#formEvents form").submit(function(event) {

});