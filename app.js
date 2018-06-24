$("video").on("play", function(){
	$("video").addClass("fade")
	$(this).removeClass("fade")
})

$("video").on("pause", function(){
	$("video").removeClass("fade")
})