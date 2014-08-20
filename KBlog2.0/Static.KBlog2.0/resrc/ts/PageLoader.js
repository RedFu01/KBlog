var KBlog;
(function (KBlog) {
    var PageLoader = (function () {
        function PageLoader() {
        }
        PageLoader.prototype.getPage = function () {
            var list = window.page.getModuleTemplates();
        };
        return PageLoader;
    })();
    KBlog.PageLoader = PageLoader;
})(KBlog || (KBlog = {}));
//# sourceMappingURL=PageLoader.js.map
