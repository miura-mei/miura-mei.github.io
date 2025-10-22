if(window.matchMedia("(min-width: 760px)").matches){
$(function () {
	$(window).scroll(function () {
		$('.animation').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
	$(window).scroll(function () {
		$('.animation_2').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});

	$(window).scroll(function () {
		$('.animation-left').each(function () {
			//ターゲットの位置を取得
			var elemPos = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var windowHeight = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > elemPos - windowHeight + 100) {
				//クラスを付与
				$(this).addClass('active-left');
			}
		});
	});

	$(window).on('load', function () {
		$('.animation-left2').each(function () {
			//ターゲットの位置を取得
			var elemPos = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var windowHeight = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > elemPos - windowHeight + 100) {
				//クラスを付与
				$(this).addClass('active-left');
			}
		});
	});

	$(window).scroll(function () {
		$('.animation-right').each(function () {
			//ターゲットの位置を取得
			var elemPos = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var windowHeight = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > elemPos - windowHeight + 100) {
				//クラスを付与
				$(this).addClass('active-right');
			}
		});
	});

	$(window).on('load',function () {
		$('.animation-right2').each(function () {
			//ターゲットの位置を取得
			var elemPos = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var windowHeight = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > elemPos - windowHeight + 100) {
				//クラスを付与
				$(this).addClass('active-right');
			}
		});
	});


})
};