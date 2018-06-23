$("video").on("mouseover", function(){
	$("video").addClass("fade")
	$(this).removeClass("fade")
})

$("video").on("mouseout", function(){
	$("video").removeClass("fade")
})