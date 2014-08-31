var KBlog;
(function (KBlog) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPage = function () {
            var list = window.page.getModuleTemplates();
        };
        return Renderer;
    })();
    KBlog.Renderer = Renderer;
})(KBlog || (KBlog = {}));
//# sourceMappingURL=TemplateRenderer.js.map
