function footer(){
    var html = "";
    html += '<div class="line"></div>'
    html += '<div class="footer-body container">'
    html += '<div class="row">'
    html += '<div class="col-md-4">'
    html += '</div>'
    html += '<div class="col-md-8">'
    html += '</div>'
    html += '</div>'
    html += '</div>'

    html += '<footer>';
    html += '<p class="text-center bg-success footer"><small>©2016 All rights researved. Regista Premium Co., Ltd.</small></p>';
    html += '<div id="page-top" class="page-top">'
    html += '<p><a id="move-page-top" class="move-page-top">▲</a></p>'
    html += '</div>'
    html += '</footer>';
    document.write(html);
}

function header() {
    var html = "";
    html += '<header>';
    html += '<div class="header"></div>';
    html += '</header>';
    document.write(html);
}

function navigation() {
  var html = "";
  html += '<div class="container">'
  html += '<div class="clearfix>'
  html += '<a href="index.html"><img src="images/logo.png" class="width" id="logo"></a>'
  html += '<a href="contact.html"><img src="images/contact-button.png" class="pull-right"></a>'
  html += '</div>'
  html += '<ul class="navigation">'
  html += '<li id="index"><a href="index.html">Home</a></li>'
  html += '<li id="appeal"><a href="appeal.html">不動産投資の魅力</a></li>'
  html += '<li id="reason"><a href="reason.html">regista premiumが<br>選ばれ続けている理由</a></li>'
  html += '<li id="qa"><a href="Q&A.html">マンション経営<br>Q&A</a></li>'
  html += '<li id="campany_info"><a href="campany_info.html">会社概要</a></li>'
  html += '<li id="contact"><a href="contact.html">お問い合わせ</a></li>'
  html += '</ul>'
  html += '</div>'
  document.write(html);
}

function spNavigation() {
  var html = "";
  html += '</div>'
  html += '<div id="navToggle">'
  html += '<div>'
  html += '<span></span>'
  html += '<span></span>'
  html += '<span></span>'
  html += '</div>'
  html += '</div>'
  html += '<ul class="spNavigation">'
  html += '<li id="index"><a href="index.html">Home</a></li>'
  html += '<li id="appeal"><a href="appeal.html">不動産投資の魅力</a></li>'
  html += '<li id="reason"><a href="reason.html">regista premiumが選ばれ続けている理由</a></li>'
  html += '<li id="qa"><a href="Q&A.html">マンション経営Q&A</a></li>'
  html += '<li id="campany_info"><a href="campany_info.html">会社概要</a></li>'
  html += '<li id="contact"><a href="contact.html">お問い合わせ</a></li>'
  html += '</ul>'
  html += '</div>'
  document.write(html);
}


