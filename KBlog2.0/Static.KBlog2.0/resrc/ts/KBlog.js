var KBlog;
(function (KBlog) {
    var Page = (function () {
        function Page() {
        }
        Page.prototype.getModuleTemplates = function () {
            var ret;
            return ret;
        };
        return Page;
    })();
    KBlog.Page = Page;
})(KBlog || (KBlog = {}));

$(document).ready(function () {
    window.page = new KBlog.Page();
});
//# sourceMappingURL=KBlog.js.map
