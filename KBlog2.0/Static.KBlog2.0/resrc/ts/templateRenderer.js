/// <reference path="d.ts/jquery.tmpl.d.ts" />
var KBlog;
(function (KBlog) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPage = function () {
            //var list = window.page.getModuleTemplates();
        };

        Renderer.prototype.renderModule = function (mod, obj) {
            var jq = $.tmpl(mod, obj);
            jq.appendTo($('main'));
        };

        Renderer.prototype.renderTemplate = function (tmpl, obj) {
            var jq = $.tmpl(tmpl, obj);
            jq.appendTo($('main'));
        };
        return Renderer;
    })();
    KBlog.Renderer = Renderer;
})(KBlog || (KBlog = {}));
//# sourceMappingURL=TemplateRenderer.js.map
