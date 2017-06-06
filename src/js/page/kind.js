var sortPage = {
	sortInit:function(){
		this.sortTab();
	},
//	tab切换
	sortTab:function(){
		$(".van-sort-content-picture-wrap .van-sort-content-picture-list").eq(0).show().siblings().hide();
		$(".van-sort-content-picture-nav-top").on("click",function(){
			
			$(this).addClass("van-sort-content-picture-nav-active").show().siblings().removeClass("van-sort-content-picture-nav-active");
			$(".van-sort-content-picture-wrap .van-sort-content-picture-list").eq($(this).index()).show().siblings().hide();
		})
	}
}
sortPage.sortInit();    
