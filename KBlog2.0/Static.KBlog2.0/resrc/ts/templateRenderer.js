/// <reference path="d.ts/jquery.tmpl.d.ts" />
var KBlog;
(function (KBlog) {
    var Renderer = (function () {
        function Renderer(page) {
            this.page = page;
        }
        Renderer.prototype.renderModules = function (moduleCount) {
            for (var i = this.page.modules.length - moduleCount; i < this.page.modules.length; i++) {
                var moduleObject = this.page.modules[i];
                var moduleTemplate = this.page.getModuleTemplate(moduleObject.templateName);
                var moduleMarkup = this.renderTemplate(moduleTemplate, moduleObject);
                moduleMarkup.appendTo($('main'));

                for (var j = 0; j = moduleObject.contentParts.length; j++) {
                    var contentPart = moduleObject.contentParts[j];
                    var contentpartTemplate = this.page.getCpTemplate(contentPart.templateName);
                    var contentpartMarkup = this.renderTemplate(contentpartTemplate, contentPart);
                    contentpartMarkup.appendTo($('.contentparts', moduleMarkup));
                }
            }
        };
        Renderer.prototype.renderTemplate = function (template, object) {
            var markup = $.tmpl(template, object);
            return markup;
        };
        return Renderer;
    })();
    KBlog.Renderer = Renderer;
})(KBlog || (KBlog = {}));
//# sourceMappingURL=TemplateRenderer.js.map
