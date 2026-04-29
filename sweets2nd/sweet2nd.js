// 実践課題①　menuのドロワーメニューの実装
jQuery("#js-drawer").on("click", function () {
  jQuery(this).next().slideToggle();
});

// 実践課題②
// topボタンをトップから80pxスクロールしたら300msかけて表示する
const topbtn = jQuery("#js-button-top");
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > 80) {
    topbtn.fadeIn(300);
  } else {
    topbtn.fadeOut(300);
  }
});

// topへ戻る
jQuery("#js-button-top").on("click", function () {
  jQuery("html,body").animate({ scrollTop: 0 }, 500);
});

//実践課題③ メニュー　モーダルで画像の拡大表示
// case1 HTML、cssに モーダル風オーバーレイが作られている状態

jQuery(".js-menuimg").on("click", function () {
    const $overlay = $(this).siblings('.overlay');
    $overlay.fadeIn(300);
  });



// overlay-img以外を押すとoverlay全体が閉じる
jQuery(".overlay").on("click", function (e) {
  if (!jQuery(e.target).closest(".overlay-img").length) {
    jQuery(".overlay").fadeOut();
  }
});



// case2 拡大画像を定義
// const menuimg = jQuery("#js-menuimg").css({
//     width:"300px",
//     height:"auto",
//     backgroundColor:"red",});

// jQuery("#js-menuimg").on("click",function(){
//         menuimg.fadeIn();
// });
