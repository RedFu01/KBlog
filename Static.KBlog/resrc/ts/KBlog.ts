/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="contentloader.ts" />
/// <reference path="utils.ts" />
/// <reference path="backend.ts" />

module KBlog {
    var isMobile = false;
    var LoadHandler = 'http://localhost:49566/content_viviana.html';
    var reloadOffset: number = isMobile ? 100 : 500;
    export var Loader = new ContentLoader();
    export var be = new KBlogBackend();
    export function init() {
        if (window.location.href.indexOf('backend=true') != -1) {
            $('.login').css('display', 'block');
        }

        //simulate network latency
        setTimeout(() => {
            addContent();
        }, 3000)

        $(window).scroll(scrollHandler);
    }

    export function addContent() {
        Loader.getContent(Utils.getStartNumber(), $(window).outerWidth(), LoadHandler, KBlog.appendContent);

    }
    export function appendContent(content: JQuery) {
        content.insertBefore($('.main .loading'));
    }

    export function scrollHandler(e) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - reloadOffset) {
            addContent();
        }
    }

}
$(document).ready(KBlog.init());