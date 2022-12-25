//スクロールエフェクト
$(function(){
    $(window).scroll(function () {
        //見出しのアニメーション指定
        var scrollAnimationElm = document.querySelectorAll('h2,scrolldownRight,scrolldownLeft,scrollup,scrollLR');
        var scrollAnimationFunc = function () {
            for (var i = 0; i < scrollAnimationElm.length; i++) {
                var triggerMargin = 200;
                if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                    scrollAnimationElm[i].classList.add('on');
                }
            }
        }
        window.addEventListener('load', scrollAnimationFunc);
        window.addEventListener('scroll', scrollAnimationFunc);

        //マイ図鑑のPICK UP!画像のアニメーション指定
        $(".scroll_blockRight,.flame_text,.fadein").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeihgt = $(window).height();
            if (scroll > blockPosition - windowHeihgt + 100) {
                $(this).addClass("blockIn");
            }
        });
        
        $(".scroll_blockLeft").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeihgt = $(window).height();
            if (scroll > blockPosition - windowHeihgt + 200) {
                $(this).addClass("blockIn");
            }
        });
    });
});
