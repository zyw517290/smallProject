/**
 * Created by matrix on 2017/5/26.
 */
//搜索框
$("#search").keyup(function() {
	if($(this).val() != "") {
		$(".cancel").show();
	} else {
		$(".cancel").hide();
	}
});
$(".cancel").on("click", function() {
	$("#search").val("");
	$(this).hide();
})
$(".search-btn").on("click", function() {
	if($("#search").val() != "") {
		location.href = "news.html";
	}
})
$(document).keydown(function(e) {
	if($("#search").val() != "") {
		if(e.keyCode == 13) {
			location.href = "news.html";
		}
	}
})

//焦点排序
$(".selected-order").click(function() {
	if($(".unselected-order").is(":hidden")) {
		$(".triangle").removeClass().addClass("triangle triangle-up");
		$(".unselected-order").show();
	} else {
		$(".triangle").removeClass().addClass("triangle triangle-down");
		$(".unselected-order").hide();
	}
})
$(".unselected-order").click(function() {
	window.location.reload();
})

