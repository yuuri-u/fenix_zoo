$(function(){
  //.questionがクリックされたら
  $('.question').click(function(){
    //クリックされた.questionに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.answer').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.question以外のquestionに隣接する.answerを閉じる
    $('.question').not($(this)).next('.answer').slideUp();
    $('.question').not($(this)).removeClass("open");
  });

  $(window).scroll(function () {
    //画像のぽよぽよアニメーション指定
    $(".imageAnime").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 100) {
            $(this).addClass("blockIn");
        }
    });
  });
});