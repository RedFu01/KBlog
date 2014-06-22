/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="contentloader.ts" />
/// <reference path="utils.ts" />
var KBlog;
(function (KBlog) {
    var LoadHandler = 'http://localhost:49566/blog_viviana.html';
    KBlog.Loader = new ContentLoader;
    function init() {
        addContent();

        $(window).scroll(scrollHandler);
    }
    KBlog.init = init;

    function addContent() {
        alert('hi :)');
        var content = KBlog.Loader.getContent(Utils.getStartNumber(), $(window).outerWidth(), LoadHandler);
        $('.main').append(content);
    }
    KBlog.addContent = addContent;

    function scrollHandler(e) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            addContent();
        }
    }
    KBlog.scrollHandler = scrollHandler;
})(KBlog || (KBlog = {}));
$(document).ready(KBlog.init());
//# sourceMappingURL=KBlog.js.map
