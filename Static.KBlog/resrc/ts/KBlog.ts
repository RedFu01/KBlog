/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="contentloader.ts" />
/// <reference path="utils.ts" />

module KBlog {
    var LoadHandler = 'http://localhost:49566/blog_viviana.html';
    export var Loader = new ContentLoader;
    export function init() {
        addContent();

        $(window).scroll(scrollHandler);
    }

    export function addContent() {
        alert('hi :)');
        var content = Loader.getContent(Utils.getStartNumber(), $(window).outerWidth(), LoadHandler);
        $('.main').append(content);
    }

    export function scrollHandler(e) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            addContent();
        }
    }


}
$(document).ready(KBlog.init());