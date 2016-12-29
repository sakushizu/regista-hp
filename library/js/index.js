function activateCurrentPageTab() {
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
}

function addNavToggleEventHandler() {
  $('#navToggle').click(function(){//headerに .openNav を付加・削除
    // console.log("ハンバーガーメニュー")
    $('body').toggleClass('openNav');
  });
}

function setBackToTopButton() {
  var syncerTimeout = null ;
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
      $( 'html,body' ).animate( {scrollTop:0},'slow');
    }
  );
}

function moveToContentIfSpecified() {
  var url = jQuery(location).attr('href');

  if (url.indexOf("?id=") != -1) {
    scrollToSpecifiedIdItem(url);
  }
}

function scrollToSpecifiedIdItem(url) {
  var url_sp = url.split("?id=");
  var hash   = '#' + url_sp[url_sp.length - 1];
  var tgt    = $(hash);
  var pos    = tgt.offset().top;
  $("html, body").animate({scrollTop:pos}, 400, "swing");
}

function isSameUrl(url) {
  var currentWindowPath = window.location.href.match(".+/(.+?)([\?#;].*)?$")[1];
  var urlPath = url.match(".+/(.+?)([\?#;].*)?$")[1];
  return currentWindowPath === urlPath;
}

function addEventHandlerOnMenuClick() {
  $('ul.list-sub li a').on('click', function(e) {
    var url = e.target.href

    if (isSameUrl(url)) {
      e.preventDefault();
      scrollToSpecifiedIdItem(url);
    } else {
      // do nothing because of default url's transition
    }
  });
}

$(document).ready(function () {
  activateCurrentPageTab();
  addNavToggleEventHandler();
  setBackToTopButton();
  moveToContentIfSpecified();
  addEventHandlerOnMenuClick();
});
