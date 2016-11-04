$(document).ready(function  () {
	$("#btn").button();
	$("#slider").selectable()
	$("#btn").on("click",function  () {
		if ($("#yes").hasClass("ui-selected")) {
			alert("哈哈，没错就是我")
		}
	})
})
