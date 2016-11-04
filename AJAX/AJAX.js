
$(document).ready(function  () {
	$("#btn").on("click",function  () {
		$("#result").text("请稍候...")
		$.post("AJAX.php",{name:$("#namevalue").val()},function  (data) {
			alert("hello")
			$("#result").text(data)
		}).error(function  () {
			$("#result").text("出现问题")
		})
	})
})
