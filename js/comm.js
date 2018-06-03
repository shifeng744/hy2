var cimi = {
	//初始执行一次
	init: function() {
		$(".list-group-item").off("click").on("click",function() {
			var index = $(this).index() + 1;
			$(".tab").hide();
			$(".list-group-item").removeClass("active");
			$(this).addClass("active");
			$(".tab-" + index).fadeIn();
		})
		$(".logo").off("click").on("click",function() {
			$(".tk-warp").css("display", "block");		
		})
		$(".tk-close").off("click").on("click",function() {
			$(".tk-warp").css("display", "none");		
		})
	}
};

cimi.init();