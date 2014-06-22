/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="contentloader.ts" />
/// <reference path="utils.ts" />
var KBlog;
(function (KBlog) {
    var isMobile = false;
    var LoadHandler = 'http://localhost:49566/content_viviana.html';
    var reloadOffset = isMobile ? 100 : 500;
    KBlog.Loader = new ContentLoader;
    function init() {
        if (window.location.href.indexOf('backend=true') != -1) {
            $('.login').css('display', 'block');
        }

        //simulate network latency
        setTimeout(function () {
            addContent();
        }, 3000);

        $(window).scroll(scrollHandler);
    }
    KBlog.init = init;

    function addContent() {
        KBlog.Loader.getContent(Utils.getStartNumber(), $(window).outerWidth(), LoadHandler, KBlog.appendContent);
    }
    KBlog.addContent = addContent;
    function appendContent(content) {
        content.insertBefore($('.main .loading'));
    }
    KBlog.appendContent = appendContent;

    function scrollHandler(e) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - reloadOffset) {
            addContent();
        }
    }
    KBlog.scrollHandler = scrollHandler;
})(KBlog || (KBlog = {}));
$(document).ready(KBlog.init());
//# sourceMappingURL=KBlog.js.map
