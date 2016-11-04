
var myjq = $.noConflict()

myjq(document).ready(function  () {
	myjq("button").on("click",function  () {
		myjq("div").text("var myjq = $.noConflict()")
	})
})