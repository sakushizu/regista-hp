$(function() {
  // 置換の対象とするclass属性。
  var $elem = $('.variable-image');
  // 置換の対象とするsrc属性の末尾の文字列。
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 768;

  function imageSwitch() {
    // ウィンドウサイズを取得する。
    var windowWidth = parseInt($(window).width());

    // ページ内にあるすべての`.js-image-switch`に適応される。
    $elem.each(function() {
      var $this = $(this);
      // ウィンドウサイズが768px以上であれば-spを-pcに置換する。
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));

      // ウィンドウサイズが768px未満であれば-pcを-spに置換する。
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 200);
  });
});
$(function() {
  $('a#to_form_link').click(function() {
    var speed = 600;
    var target = $("#form");
    // var target = $(href == "#" || href == "" ? 'html' : href );
    var position = target.offset().top;
    $('body, html').animate({scrollTop:position}, speed, 'easeInOutCubic');
  });
});

$(document).ready(function () {

  var url = window.location.pathname;

  if (/index/.test(url)) {
    $('.navigation li').removeClass("active");
    $('#index').addClass("active");
  } else if (/appeal/.test(url) ) {
    $('.navigation li').removeClass("active");
    $('#appeal').addClass("active");
  } else if (/reason/.test(url)) {
    $('.navigation li').removeClass("active");
    $('#reason').addClass("active");
  } else if (/qa/.test(url)) {
    $('.navigation li').removeClass("active");
    $('#qa').addClass("active");
  } else if (/campany_info/.test(url)) {
    $('.navigation li').removeClass("active");
    $('#campany_info').addClass("active");
  } else if (/contact/.test(url)) {
    $('.navigation li').removeClass("active");
    $('#contact').addClass("active");
  };

});

$(function() {
    $('#navToggle').click(function(){//headerに .openNav を付加・削除
      console.log("ハンバーガーメニュー")
        $('body').toggleClass('openNav');
    });
});


//top戻るボタン

// グローバル変数
var syncerTimeout = null ;

// 一連の処理
$( function() {
  // スクロールイベントの設定
  $( window ).scroll( function() {
    // 1秒ごとに処理
    if( syncerTimeout == null ) {
      // セットタイムアウトを設定
      syncerTimeout = setTimeout( function() {
        // 対象のエレメント
        var element = $( '#page-top' );
        // 現在、表示されているか？
        var visible = element.is( ':visible' );
        // 最上部から現在位置までの距離を取得して、変数[now]に格納
        var now = $( window ).scrollTop();
        // 最下部から現在位置までの距離を計算して、変数[under]に格納
        var under = $( 'body' ).height() - ( now + $(window).height());
        // 最上部から現在位置までの距離(now)が500以上かつ
        // 最下部から現在位置までの距離(under)が200px以上かつ…
        if( now > 500 ) {
          // 非表示状態だったら
          if( !visible ) {
            // [#page-top]をゆっくりフェードインする
            element.fadeIn( 'slow' );
          };
        } else if(visible) {
          // [#page-top]をゆっくりフェードアウトする
          element.fadeOut('slow');
        };
        // フラグを削除
        syncerTimeout = null;
      },1000);
    }
  });

  // クリックイベントを設定する
  $( '#move-page-top' ).click(
    function() {
      // スムーズにスクロールする
      $( 'html,body' ).animate( {scrollTop:0},'slow');
    }
  );
});
