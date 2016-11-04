$(document).ready(function  () {
	$("#a_btn").button()
	$("#a_btn").resizable()
	$("#div").draggable()
		$("#div1").droppable()
		$("#div1").on("drop",function  (event,ui) {
			$(this).css("background","#20A6FA")
		})
})

