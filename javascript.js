$(function(){
    $(window).on('load scroll', function() {
       var winScroll = $(window).scrollTop();
       var winHeight = $(window).height();
       var scrollPos = winScroll + (winHeight * 0.8);
 
       $(".show").each(function() {
          if($(this).offset().top < scrollPos) {
             $(this).css({opacity: 1, transform: 'translate(0, 0)'});
          }
       });
    });
 });
$(function() {
     $('.toggle').click(function() {
       $(this).toggleClass('active');
      $('.menu').toggleClass('open');
     });
});
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 2,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
});